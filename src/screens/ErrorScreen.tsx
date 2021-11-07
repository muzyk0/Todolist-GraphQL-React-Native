import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import LoginScreenInfo from "../components/Login/LoginScreenInfo";
import { Text, View } from "../components/Themed";

export default function ErrorScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Some error occurred</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
});
