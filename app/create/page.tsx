'use client';

import InputImage from "./inputImage";
import styled from "styled-components";
import Loading from "../components/loading";
import PointSelection from "./pointSelection";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { UploadPost } from "@/app/create/uploadPost";
import { UploadImage } from "@/app/create/uploadImage";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { idTokenStore, isLoginStore, postCreatedStore, selectedPointStore } from "../recoilContextProvider";

export default function Create() {
    const router = useRouter();
    const idToken = useRecoilValue(idTokenStore);
    const isLogin = useRecoilValue(isLoginStore);
    const setPostCreated = useSetRecoilState(postCreatedStore);
    const [image, setImage] = useState<any[]>([]);
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [readyToUpload, setReadyToUpload] = useState<boolean>(false);
    const selectedPoint = useRecoilValue(selectedPointStore);
    const inputStyle = "text-black mb-6 w-[20vw] rounded-md px-3";

    const routerToMain = (point:string) => {
        router.push(`/${point}`);
    }

    useEffect(() => {
        if(!isLogin) router.push(`/signin`);
    }, [])

    const handleUploadPost = () => {
        // 게시물 저장 path 가져와 cloud path로 사용
        UploadPost({title, content, idToken, selectedPoint})
        .then((res) => {
            UploadImage(
                image, 
                idToken, 
                res.name, 
                selectedPoint, 
                routerToMain, 
                setPostCreated
            );
            setIsLoading(true);
        })
    }

    useEffect(() => {
        if(title !== "" && image.length > 0 && selectedPoint !== "") setReadyToUpload(true);
        else setReadyToUpload(false);
    }, [title, image])

    useEffect(() => {
        console.log("image : ", image);
    }, [image])
    
    return (
        <div className="flex flex-col center bg-stone-800 rounded-2xl w-[40vw] min-h-[60vh] shadow-2xl nnl">
            <title>대동, 당신의 지도 | 게시물 작성</title>
            { isLoading ? <Loading /> : <></> }
            <p className="text-3xl lml text-white mb-8">New Post</p>
            <div className="w-[20vw]">
                <PointSelection />
            </div>
            <InputImage image={image} setImage={setImage} />
            <Input 
                value={title} 
                placeholder="title" 
                onChange={(e)=>setTitle(e.target.value)} 
                className={inputStyle}
            />
            <InputArea 
                value={content} 
                placeholder="content" 
                onChange={(e)=>setContent(e.target.value)} 
                className={inputStyle}
            />
            { isLoading ? 
                <></> 
                : 
                readyToUpload ? 
                <Btn 
                    onClick={handleUploadPost} 
                    className="lml rounded-md bg-white text-black w-[20vw]"
                >
                    upload
                </Btn> 
                :
                <></>
            }
        </div>
    )
}

const Btn = styled.button`
    transition: 0.3s ease;
    &:hover {
        background-color: #003545;
        color: white;
    }
`

const Input = styled.input`
    &:focus {
        outline: none;
    }
`

const InputArea = styled.textarea`
    &:focus {
        outline: none;
    }
`