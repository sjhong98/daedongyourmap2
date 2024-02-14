'use client';

import { PostType } from "@/app/recoilContextProvider";
import { Dispatch, useEffect, useState } from "react";

type Prop = {
    post:PostType|null, 
    isModify:boolean, 
    setIsModify:Dispatch<boolean>, 
    postId:string, 
    idToken:string
}

export default function PostContent(props:Prop) {
    const {post, isModify, postId, idToken, setIsModify} = props;
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
        fetch(`https://firestore.googleapis.com/v1/projects/daedongyourmap-ad63d/databases/(default)/documents/posts/${postId}?updateMask.fieldPaths=title`, {
            method: 'PATCH',
            headers: {
                "Authorization": `Bearer ${idToken}`
            },
            body: JSON.stringify({
                fields: {
                    title: { stringValue: title }
                }
            })
        })
        .then(() => { console.log("title 수정 완료"); })
        .catch((err)=> console.log(err) );
    
        fetch(`https://firestore.googleapis.com/v1/projects/daedongyourmap-ad63d/databases/(default)/documents/posts/${postId}?updateMask.fieldPaths=content`, {
            method: 'PATCH',
            headers: {
                "Authorization": `Bearer ${idToken}`
            },
            body: JSON.stringify({
                fields: {
                    content: { stringValue: content }
                }
            })
        })
        .then(() => { 
            console.log("content 수정 완료"); 
            setIsModify(false); 
        })
        .catch((err)=> console.log(err) );
    }

    return (
        <div>
        { isModify ? 
            <div>
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