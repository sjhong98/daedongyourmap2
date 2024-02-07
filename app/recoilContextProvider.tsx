"use client";

import React from "react";
import { RecoilRoot, atom } from "recoil";

export interface UserDataType{
    email:string | null,
    uid:string,
    photoURL:string | null,
    idToken: string,
    refreshToken: string,
    displayName: string | null
}

export const idTokenStore = atom<string>({
    key:'idTokenStore',
    default: ""
})

export const userDataStore = atom<UserDataType | null>({
    key:'userDataStore',
    default: null
})

export default function RecoilContextProvider({children}: {children:React.ReactNode}) {
    return <RecoilRoot>{ children }</RecoilRoot>
}