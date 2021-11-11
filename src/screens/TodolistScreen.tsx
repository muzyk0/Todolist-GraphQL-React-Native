import { FontAwesome } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, StyleSheet, TextInput } from "react-native";
import * as yup from "yup";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View, ScrollView } from "../components/Themed";
import TaskItem from "../components/Todolist/TaskItem";
import TodolistItem from "../components/Todolist/TodolistItem";
import {
    TodolistsDocument,
    useAddTaskMutation,
    useAddTodolistMutation,
    useRemoveTaskMutation,
    useRemoveTodolistMutation,
    useTasksQuery,
    useTodolistsQuery,
} from "../generated/graphql";
import { RootTabScreenProps } from "../types";

interface AddTask {
    title: string;
}

const schema = yup.object({
    title: yup.string().min(5),
});

export default function TodolistScreen({
    navigation,
    route,
}: RootTabScreenProps<"TodoList">) {
    const { title, todolistId, description } = route.params;
    const { data, loading } = useTasksQuery({
        variables: { id: todolistId },
    });

    const [removeTask] = useRemoveTaskMutation();
    const [addTask] = useAddTaskMutation();

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<AddTask>({
        resolver: yupResolver(schema),
    });

    const onAddTaskSubmit = handleSubmit(async ({ title }) => {
        const response = await addTask({
            variables: {
                todolistId,
                title,
            },
            refetchQueries: ["Tasks"],
        });
        reset({ title: "" });
        if (response.errors) {
            alert(response.errors[0].message);
        }
    });

    if (loading) {
        return (
            <View>
                <Text>loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>

                {/* TODO: duplicate code => HomeScreen */}
                <View style={styles.inputContainer}>
                    <View>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <TextInput
                                    style={styles.input}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="title"
                            defaultValue=""
                        />
                        {errors.title && <Text>{errors.title.message}</Text>}
                    </View>
                    <View style={styles.iconButton}>
                        <Pressable onPress={onAddTaskSubmit}>
                            <FontAwesome name="plus-circle" size={20} />
                        </Pressable>
                    </View>
                    <FontAwesome />
                </View>

                <View
                    style={styles.separator}
                    lightColor="#eee"
                    darkColor="rgba(255,255,255,0.1)"
                />

                {data?.tasks.length ? (
                    data.tasks.map((task) => {
                        const onRemoveTaskClick = async () => {
                            const result = await removeTask({
                                variables: { id: task.id },
                                refetchQueries: ["Tasks"],
                            });

                            //TODO: сделать универсальный алерт
                            if (result.errors) {
                                alert(result.errors[0].message);
                            }
                        };
                        return (
                            <TaskItem
                                key={task.id}
                                task={task}
                                onRemoveTask={onRemoveTaskClick}
                            />
                        );
                    })
                ) : (
                    <View>
                        <Text>no data</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    scrollContainer: {
        width: "100%",
    },
    title: {
        marginHorizontal: "auto",
        marginVertical: 10,
        fontSize: 20,
        fontWeight: "bold",
    },
    description: {
        fontSize: 12,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    inputContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // marginBottom: 10,
    },
    input: {
        backgroundColor: "#fff",
        height: 30,
        borderWidth: 1,
        borderRadius: 5,
    },
    iconButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 30,
        width: 30,
        height: 30,
        backgroundColor: "#fff",
        borderRadius: 5,
        marginLeft: 5,
    },
});
