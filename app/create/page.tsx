'use client';

import { useState } from "react";
import UploadFile from "../board/uploadFile";
import { UploadPost } from "@/app/create/uploadPost";
import { useRecoilValue } from "recoil";
import { idTokenStore } from "../recoilContextProvider";
import { UploadImage } from "@/app/create/uploadImage";

export default function Create() {
    const [image, setImage] = useState<any>();
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const idToken = useRecoilValue(idTokenStore);

    const handleUploadPost = () => {
        // 게시물 저장 path 가져와 cloud path로 사용
        UploadPost({title, content, idToken})
        .then((res) => {
            UploadImage(image, idToken, res.name);
        })
    }

    const onSelectFile = (e:any) => {
        setImage(e.target.files[0]);
    } 
    
    return (
        <div className="flex flex-col">
            <h1>게시물 작성</h1>
            <input
                type='file'
                name='images'
                onChange={onSelectFile}
                accept='.png, .jpg,image/*'
            />
            <input value={title} placeholder="title" onChange={(e)=>setTitle(e.target.value)} className="text-black mb-6" />
            <input value={content} placeholder="content" onChange={(e)=>setContent(e.target.value)} className="text-black" />
            <button onClick={handleUploadPost}>upload</button>
        </div>
    )
}