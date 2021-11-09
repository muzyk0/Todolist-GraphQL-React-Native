import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useNavigationState } from "@react-navigation/core";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Button, Pressable, StyleSheet, TouchableOpacity } from "react-native";
import useColorScheme from "../../../hooks/useColorScheme";

import Colors from "../../constants/Colors";
import { TodolistsQuery } from "../../generated/graphql";
import { RootTabParamList } from "../../types";
import { IconButton } from "../Login/IconButton";
import { MonoText } from "../StyledText";
import { Text, View } from "../Themed";

type Todolist = TodolistsQuery["todolists"][0];

interface Props {
    todolist: Todolist;

    onRemoveTodolist: () => void;
}

export default function Todolist({
    todolist: { title, description, tasks },
    onRemoveTodolist,
    ...props
}: Props) {
    const navigation = useNavigation();
    const colorScheme = useColorScheme();

    return (
        <View style={styles.container}>
            <View>
                <Text
                    style={styles.title}
                    lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)"
                >
                    {title}
                </Text>

                <Text
                    style={styles.description}
                    lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)"
                >
                    {description?.slice(0, 15)}
                </Text>
            </View>

            <View style={styles.actionButtons}>
                <View style={styles.IconButton}>
                    <Pressable
                        onPress={() => {
                            navigation.navigate("Todolist", {
                                tasks: tasks,
                            } as any);
                        }}
                    >
                        <FontAwesome
                            name="edit"
                            size={15}
                            color={Colors[colorScheme].text}
                        />
                    </Pressable>
                </View>
                <View style={styles.IconButton}>
                    <Pressable hitSlop={20} onPress={onRemoveTodolist}>
                        <FontAwesome
                            name="remove"
                            size={15}
                            color={Colors[colorScheme].text}
                        />
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 40,
        marginHorizontal: 5,
    },
    title: {
        fontSize: 16,
    },
    description: { fontSize: 12 },
    actionButtons: { display: "flex", flexDirection: "row" },
    IconButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 20,
        height: 20,
        borderRadius: 5,
        marginLeft: 5,
    },
});
