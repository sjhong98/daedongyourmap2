'use client';

import InputImage from "./inputImage";
import styled from "styled-components";
import Loading from "../components/loading";
import PointSelection from "./pointSelection";
import CancelIcon from '@mui/icons-material/Cancel';
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
    const [tag, setTag] = useState<string>("");
    const [tags, setTags] = useState<{stringValue:string}[]>([]);
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

    const handleAddTag = () => {
        let temp = [...tags];
        let tempTag = { stringValue: tag }
        temp.push(tempTag);
        setTags(temp);
        setTag("");
    }

    const handleDeleteTag = (index: number) => {
        let temp = [...tags];
        temp.splice(index, 1);
        setTags(temp);
    }

    const handleUploadPost = () => {
        // 게시물 저장 path 가져와 cloud path로 사용
        UploadPost({
            title, 
            content, 
            idToken, 
            selectedPoint, 
            tags
        })
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
            <div>
                <Input 
                    value={tag}
                    placeholder="tag"
                    onChange={(e)=>setTag(e.target.value)}
                    className={inputStyle}
                />
                { tag === "" ?
                    <></>
                    :
                    <Btn
                        onClick={handleAddTag}
                        className="lml rounded-md bg-white text-black w-[5vw] ml-[-5vw]"
                    >
                        Add
                    </Btn>
                }
            </div>
            <div className="flex flex-wrap w-[20vw] mt-[-1vh] mb-[2vh]">
            { tags.map((item: {stringValue:string}, index: number) => {
                return (
                    <TagChip key={index}>
                        <p id="tag">#{item.stringValue}</p>
                        <div 
                            id="remove-tag" 
                            onClick={()=>handleDeleteTag(index)}
                        >
                            <CancelIcon />
                        </div>
                    </TagChip>
                )
            })
            }
            </div>
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

const TagChip = styled.div`
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    margin: 0.2vw;
    margin-right: -1.4vw;
    &:hover {
        #remove-tag {
            visibility: visible;
        }
        margin-right: 0vw;
    }
    #tag {
        background-color: white;
        border-radius: 0.3vw;
        padding-left: 0.2vw;
        padding-right: 0.2vw;
        color:black;
    }
    #remove-tag {
        visibility: hidden;
        cursor: pointer;
        &:active {
            color: #222;
        }
    }
`