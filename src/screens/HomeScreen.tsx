import { FontAwesome } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, StyleSheet, TextInput } from "react-native";
import * as yup from "yup";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View, ScrollView } from "../components/Themed";
import Todolist from "../components/Todolist/Todolist";
import {
    TodolistsDocument,
    useAddTodolistMutation,
    useRemoveTodolistMutation,
    useTodolistsQuery,
} from "../generated/graphql";
import { RootTabScreenProps } from "../types";

interface AddTodolist {
    title: string;
}

const schema = yup.object({
    title: yup.string().min(5),
});

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
    const { data, loading } = useTodolistsQuery();
    const [removeTodolist] = useRemoveTodolistMutation();
    const [addTodolist] = useAddTodolistMutation();

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<AddTodolist>({
        resolver: yupResolver(schema),
    });

    const onAddTodolistSubmit = handleSubmit(async (data) => {
        const response = await addTodolist({
            variables: data,
            refetchQueries: ["Todolists"],
        });
        reset({ title: "" });
        if (response.errors) {
            alert(response.errors[0].message);
        }
    });

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>loading...</Text>
            </View>
        );
    }

    if (!data) {
        return (
            <View style={styles.container}>
                <Text>no data</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <Text style={styles.title}>Todo Lists</Text>

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
                        <Pressable onPress={onAddTodolistSubmit}>
                            <FontAwesome
                                name="plus-circle"
                                style={{ fontSize: 20 }}
                            />
                        </Pressable>
                    </View>
                    <FontAwesome />
                </View>

                <View
                    style={styles.separator}
                    lightColor="#eee"
                    darkColor="rgba(255,255,255,0.1)"
                />
                {data.todolists.map((todolist) => {
                    const onRemoveTodolistClick = async () => {
                        await removeTodolist({
                            variables: {
                                id: todolist.id,
                            },
                            refetchQueries: ["Todolists"],
                        });
                    };
                    return (
                        <Todolist
                            key={todolist.id}
                            todolist={todolist}
                            onRemoveTodolist={onRemoveTodolistClick}
                        />
                    );
                })}
                {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
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
