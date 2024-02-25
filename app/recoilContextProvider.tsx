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

export interface PostType {
    createTime:string
    content:string,
    title:string,
    point:string,
    photo:Array<any>,
    user:string,
    comments:Array<any>,
    name:string,
    likes:Array<any>,
    tags:Array<string>
}

export interface ProfileType {
    displayName: string | null,
    email: string,
    photoURL: string | null,
    emailVerified: boolean
}

export const postCreatedStore = atom<boolean>({
    key:'postCreated',
    default: false
})

export const profileStore = atom<any>({
    key:'profile',
    default: {}
})

export const isLoginStore = atom<boolean>({
    key:'isLogin',
    default: false,
})

export const curComments = atom<any>({
    key:'curComments',
    default: "",
})

export const idTokenStore = atom<string>({
    key:'idTokenStore',
    default: ""
})

export const userDataStore = atom<UserDataType | null>({
    key:'userDataStore',
    default: null
})

export const selectedPointStore = atom<string>({
    key:'selectedPointStore',
    default: "",
})

export const curPostStore = atom<PostType | null>({
    key:'curPostStore',
    default: null
})

export const isPostViewOpenStore = atom<boolean>({
    key:'isPostViewOpen',
    default:false
})

export const isPostBoardStore = atom<boolean>({
    key:'isPostBoardStore',
    default: false
})

export default function RecoilContextProvider({children}: {children:React.ReactNode}) {
    return <RecoilRoot>{ children }</RecoilRoot>
}