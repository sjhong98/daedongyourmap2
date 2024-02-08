'use client';

import { useRecoilState, useRecoilValue } from "recoil";
import { curPostStore, idTokenStore, isPostViewOpenStore, userDataStore } from "../recoilContextProvider";
import { useEffect, useState } from "react";
import Image from "next/image";
import PostSlider from "./postSlider";
import profile from '@/public/defaultProfilePic.jpeg';
import { UploadComment } from "./comments/uploadComment";

interface CommentType {
    
}

export default function PostView() {
    const post = useRecoilValue(curPostStore);
    const userData = useRecoilValue(userDataStore);
    const idToken = useRecoilValue(idTokenStore);
    const [isOpen, setIsOpen] = useRecoilState(isPostViewOpenStore);
    const [style, setStyle] = useState<string>("invisible");
    const [comment, setComment] = useState<string>("");
    const [comments, setComments] = useState<any>([]);

    useEffect(() => {
        if(post) {
            setComments()
        }
    }, [])
    
    useEffect(() => {
        if(isOpen) setStyle("flex");
        else setStyle("invisible");
    }, [isOpen])

    const handleClickExit = (e:any) => {
        if(e.target.id === 'outside-view')
            setIsOpen(false);
    }

    const handleCommentInput = () => {
        if(post) {
            UploadComment(post, idToken, comment);
            setComment("");
        }

    }

    return (
        <div 
            id="outside-view" 
            onClick={handleClickExit}
            className={`w-screen h-screen center fixed backdrop-blur-lg mt-[-20vh] z-[1000] ${style}`} 
        >
            <div className="flex w-[60vw] h-[70vh] bg-white">
                <div className="flex w-2/3 h-full ">
                    <PostSlider post={post} />
                </div>
                <div className="w-1/3 h-full flex flex-col p-6">

                    {/* 작성자 정보 */}
                    <div className="">
                        <div className="flex nnn">
                            { userData?.photoURL === undefined ? <Image src={profile} alt="profile" className="rounded-full w-[1.5vw] mr-3 mt-1" /> : <></>}
                            { userData?.displayName === undefined ? <p>{post?.user}</p> : <>{userData.displayName}</>}
                        </div>
                        <div className="mt-1 ml-8">
                            <p className="nnb">{post?.title}</p>
                            <p className="text-[0.8rem] nnn">{post?.content}</p>
                        </div>
                    </div>

                    {/* 댓글 */}
                    <div className="w-full h-full pt-10 overflow-auto">
                    { post?.comments !== undefined && post?.comments.map((item:any, index:number) => {
                        return (
                            <div key={index}>
                                <p className="nnn text-[1rem] mt-6">
                                    {item.mapValue !== undefined && item.mapValue.fields.user.stringValue}
                                </p>
                                <p className="nnn text-[0.7rem]">
                                    {item.mapValue !== undefined && item.mapValue.fields.comment.stringValue}
                                </p>
                            </div>    
                        )
                        })}
                    </div>

                    {/* 댓글 입력 */}
                    <div className="flex">
                        <input 
                            value={comment}
                            onChange={(e)=>setComment(e.target.value)}  
                            placeholder="댓글을 입력하세요"  
                            className="focus:outline-none text-black nnn rounded-xl border-2 p-1 mr-1"
                        />
                        <button 
                            onClick={handleCommentInput}
                            className="w-[3vw] bg-stone-500 rounded-xl text-[0.7rem] nnn hover:bg-stone-200 hover:text-black"
                        >
                            입력
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}