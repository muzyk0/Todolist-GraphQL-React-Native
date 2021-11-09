import { FontAwesome } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Button, Pressable, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../../constants/Colors";
import { TodolistsQuery } from "../../generated/graphql";
import { IconButton } from "../Login/IconButton";
import { MonoText } from "../StyledText";
import { Text, View } from "../Themed";

type Todolist = TodolistsQuery["todolists"][0];

interface Props {
    todolist: Todolist;

    onRemoveTodolist: () => void;
}

export default function Todolist({
    todolist: { title, description },
    onRemoveTodolist,
}: Props) {
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
                    <Pressable>
                        <FontAwesome name="edit" />
                    </Pressable>
                </View>
                <View style={styles.IconButton}>
                    <Pressable hitSlop={20} onPress={onRemoveTodolist}>
                        <FontAwesome name="remove" />
                    </Pressable>
                </View>
            </View>

            {/* <View
                    style={[
                        styles.codeHighlightContainer,
                        styles.homeScreenFilename,
                    ]}
                    darkColor="rgba(255,255,255,0.05)"
                    lightColor="rgba(0,0,0,0.05)"
                >
                    <MonoText>{}</MonoText>
                </View>

                <Text
                    style={styles.getStartedText}
                    lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)"
                >
                    Change any of the text, save the file, and your app will
                    automatically update.
                </Text> */}
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
        backgroundColor: "#fff",
        borderRadius: 5,
        marginLeft: 5,
    },
});
