import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Pressable, View, StyleSheet } from "react-native";

interface Props {
    icon: any;
    onPress?: () => {};
}

/**
 * Component is rendering pressable Icon Button
 * @param param0
 * @returns
 */
export const IconButton = ({ icon, onPress }: Props) => {
    return (
        <View style={styles.removeButton}>
            <Pressable hitSlop={20} onPress={() => onPress?.()}>
                <FontAwesome name={icon} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    removeButton: {
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
