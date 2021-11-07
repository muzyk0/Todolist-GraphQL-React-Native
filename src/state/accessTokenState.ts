import { atom, useRecoilValue, useSetRecoilState } from "recoil";

/**
 * State for saves accessToken
 */
export const accessTokenState = atom({
    key: "accessToken",
    default: "",
});

export const useSetAccessToken = () => {
    return useSetRecoilState(accessTokenState);
};

export const useGetAccessToken = () => {
    return useRecoilValue(accessTokenState);
};
