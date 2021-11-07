import { ApolloProvider } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useRecoilState } from "recoil";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import { createApolloClient } from "./src/lib/apolloClient";
import Navigation from "./src/navigation";
import { accessTokenState } from "./src/state/accessTokenState";

export const AppApolloProvider: React.FC = ({ children }) => {
    // Generate apolloClint
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
    const client = createApolloClient(accessToken, setAccessToken);
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
