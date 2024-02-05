"use client";

import test from '@/public/test.jpg';

import { useState } from "react"
import { idTokenStore } from "../recoilContextProvider";
import { UploadImage } from '@/app/create/uploadImage';
import { useRecoilValue } from 'recoil';

export default function Board() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const idToken = useRecoilValue(idTokenStore);
    const photo = null;

    return (
        <div className="flex flex-col w-1/2">
        </div>
    )
}