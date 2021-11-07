import React from "react";
import { useSetRecoilState } from "recoil";
import { accessTokenState } from "../src/state/accessTokenState";

export const useInitializeApp = () => {
    const [loading, setLoading] = React.useState(true);

    const setAccessToken = useSetRecoilState(accessTokenState);

    React.useLayoutEffect(() => {
        fetch("http://localhost:5000/refresh_token", {
            method: "POST",
            credentials: "include",
        }).then(async (req) => {
            const { accessToken } = await req.json();

            setAccessToken(accessToken);
            setLoading(false);
        });
    }, []);
    return loading;
};
