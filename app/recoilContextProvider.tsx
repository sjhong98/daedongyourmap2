"use client";

import React from "react";
import { RecoilRoot, atom } from "recoil";

export const idTokenStore = atom<string>({
    key:'idTokenStore',
    default: ""
})

export default function RecoilContextProvider({children}: {children:React.ReactNode}) {
    return <RecoilRoot>{ children }</RecoilRoot>
}