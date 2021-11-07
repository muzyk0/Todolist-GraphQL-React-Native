import * as WebBrowser from "expo-web-browser";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../../constants/Colors";
import { Text, View } from "../Themed";
import LoginScreenForm from "./LoginScreenForm";

export default function LoginScreenInfo() {
    return (
        <View>
            <View style={styles.getStartedContainer}>
                <Text
                    style={styles.getStartedText}
                    lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)"
                >
                    Before you can use this app, you need to log in
                </Text>

                <LoginScreenForm />

                <Text
                    style={styles.getStartedText}
                    lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)"
                >
                    By clicking the button, you agree to be enslaved.
                </Text>
            </View>

            <View style={styles.helpContainer}>
                <TouchableOpacity
                    onPress={handleHelpPress}
                    style={styles.helpLink}
                >
                    <Text
                        style={styles.helpLinkText}
                        lightColor={Colors.light.tint}
                    >
                        Author: "muzyk0"
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function handleHelpPress() {
    WebBrowser.openBrowserAsync("https://vk.com/muzyk0");
}

const styles = StyleSheet.create({
    getStartedContainer: {
        alignItems: "center",
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightContainer: {
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        marginTop: 15,
        fontSize: 17,
        lineHeight: 24,
        textAlign: "center",
    },
    helpContainer: {
        marginTop: 15,
        marginHorizontal: 20,
        alignItems: "center",
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        textAlign: "center",
    },
    inputContainer: {
        marginBottom: 10,
    },
    input: {
        backgroundColor: "#fff",
        height: 30,
        borderWidth: 1,
        borderRadius: 5,
    },
});
