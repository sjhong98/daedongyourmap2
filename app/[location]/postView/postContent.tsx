'use client';

import PointSelection from "@/app/create/pointSelection";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Dispatch, useEffect, useState } from "react";
import { PostType, isPostViewOpenStore, selectedPointStore } from "@/app/recoilContextProvider";

type Prop = {
    post:PostType|null, 
    isModify:boolean, 
    setIsModify:Dispatch<boolean>, 
    postId:string, 
    idToken:string
}

export default function PostContent(props:Prop) {
    const {post, isModify, postId, idToken, setIsModify} = props;
    const selectedPoint = useRecoilValue(selectedPointStore);
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const inputStyle = "text-black focus:outline-none rounded-md border-[1px] w-[12vw] p-2"

    useEffect(() => {
        if(post) {
            setTitle(post.title);
            setContent(post.content);
        }
    }, [post])

    const handleClickModify = () => {  
        fetch(`https://firestore.googleapis.com/v1/projects/daedongyourmap-ad63d/databases/(default)/documents/posts/${postId}?updateMask.fieldPaths=title&updateMask.fieldPaths=content&updateMask.fieldPaths=point`, {
            method: 'PATCH',
            headers: {
                "Authorization": `Bearer ${idToken}`
            },
            body: JSON.stringify({
                fields: {
                    title: { stringValue: title },
                    content: { stringValue: content },
                    point: { stringValue: selectedPoint }
                }
            })
        })
        .then(() => { 
            console.log("수정 완료"); 
            setIsModify(false);
        })
        .catch((err)=> console.log(err) );
    }

    return (
        <div>
        { isModify ? 
            <div>
                <PointSelection curSelectedPoint={post?.point} />
                <input 
                    value={title} 
                    onChange={(e)=>setTitle(e.target.value)} 
                    className={`${inputStyle} nnb`} 
                />
                <textarea 
                    value={content} 
                    onChange={(e)=>setContent(e.target.value)} 
                    className={`${inputStyle} nnn text-[0.8rem]`} 
                />
                <button 
                    onClick={handleClickModify} 
                    className="w-[12vw] bg-[#003545] rounded-md text-sm py-1"
                >
                    수정
                </button>
            </div>
            :
            <div>
                <p className="nnb">{title}</p> 
                <pre className="text-[0.8rem] nnn">{content}</pre>
            </div>
        }
        </div>
    )
}