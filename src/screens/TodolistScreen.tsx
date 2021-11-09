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

export default function TodolistScreen({
    navigation,
    route,
}: RootTabScreenProps<"TodoList">) {
    const { tasks } = route.params;
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <Text style={styles.title}>Todo Lists</Text>
                <View
                    style={styles.separator}
                    lightColor="#eee"
                    darkColor="rgba(255,255,255,0.1)"
                />
                <Text>{JSON.stringify(tasks)}</Text>
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
    // inputContainer: {
    //     display: "flex",
    //     flexDirection: "row",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     // marginBottom: 10,
    // },
    // input: {
    //     backgroundColor: "#fff",
    //     height: 30,
    //     borderWidth: 1,
    //     borderRadius: 5,
    // },
    // iconButton: {
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     fontSize: 30,
    //     width: 30,
    //     height: 30,
    //     backgroundColor: "#fff",
    //     borderRadius: 5,
    //     marginLeft: 5,
    // },
});
