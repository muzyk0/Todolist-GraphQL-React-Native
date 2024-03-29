import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RecoilRoot } from "recoil";
import { AppApolloProvider } from "./AppApolloProvider";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./src/navigation";

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
                <RecoilRoot>
                    <AppApolloProvider>
                        <Navigation colorScheme={colorScheme} />
                        <StatusBar />
                    </AppApolloProvider>
                </RecoilRoot>
            </SafeAreaProvider>
        );
    }
}
