import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Colors from "../../constants/Colors";
import { MonoText } from "../StyledText";
import { Text, View } from "../Themed";
import { MeDocument, MeQuery, useLoginMutation } from "../../generated/graphql";
import { useSetAccessToken } from "../../state/accessTokenState";

interface FormData {
    email: string;
    password: string;
}

const schema = yup
    .object({
        email: yup.string().email().required(),
        password: yup.string().min(6).required(),
    })
    .required();

export default function LoginScreenForm() {
    const setAccessToken = useSetAccessToken();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const [loginMutation] = useLoginMutation({
        update: (cache, { data }) => {
            if (!data) {
                return null;
            }
            cache.writeQuery<MeQuery>({
                query: MeDocument,
                data: {
                    me: data.login.user,
                },
            });
        },
    });

    const onSubmit = handleSubmit(async (data) => {
        const response = await loginMutation({
            variables: data,
        });

        if (response.errors) {
            alert(response.errors[0].message);
        } else {
            if (response.data) {
                setAccessToken(response.data.login.accessToken);
            }
        }
    });

    return (
        <View
            style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
            darkColor="rgba(255,255,255,0.05)"
            lightColor="rgba(0,0,0,0.05)"
        >
            <View>
                <View style={styles.inputContainer}>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="email"
                        defaultValue=""
                    />
                    {errors.email && <Text>{errors.email.message}</Text>}
                </View>

                <View style={styles.inputContainer}>
                    <Controller
                        control={control}
                        rules={{
                            maxLength: 100,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="password"
                        defaultValue=""
                    />
                    {errors.password && <Text>{errors.password.message}</Text>}
                </View>

                <Button title="Submit" onPress={onSubmit} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightContainer: {
        borderRadius: 3,
        paddingHorizontal: 4,
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
