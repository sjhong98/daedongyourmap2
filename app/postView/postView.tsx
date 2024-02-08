'use client';

import Image from "next/image";
import PostSlider from "./postSlider";
import profile from '@/public/defaultProfilePic.jpeg';
import { useEffect, useState } from "react";
import { UploadComment } from "./comments/uploadComment";
import { useRecoilState, useRecoilValue } from "recoil";
import { curPostStore, idTokenStore, isPostViewOpenStore, userDataStore } from "../recoilContextProvider";
import FB from '@mui/icons-material/FavoriteBorder';
import FI from '@mui/icons-material/Favorite';
import { Likes } from "./likes/likes";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/firestore/config";
import { getAuth } from "firebase/auth";
import styled from "styled-components";

export default function PostView() {
    const post = useRecoilValue(curPostStore);
    const userData = useRecoilValue(userDataStore);
    const idToken = useRecoilValue(idTokenStore);
    const [isOpen, setIsOpen] = useRecoilState(isPostViewOpenStore);
    const [style, setStyle] = useState<string>("invisible");
    const [comment, setComment] = useState<string>("");
    const [comments, setComments] = useState<any>([]);
    const [likes, setLikes] = useState<any>([]);
    const [curEmail, setCurEmail] = useState<string>(" ");
    const [didLike, setDidLike] = useState<boolean>(false);

    useEffect(() => {
        initializeApp(firebaseConfig);
        const auth = getAuth();
        if(auth.currentUser && auth.currentUser.email)
            setCurEmail(auth.currentUser.email);
    }, [])

    useEffect(() => {
        if(post && post.comments !== undefined && post.likes !== undefined) {
            setComments([...post.comments]);
            setLikes([...post.likes]);
        }
    }, [post])

    useEffect(() => {
        console.log(likes, likes.find((item:any) => item.stringValue === curEmail), curEmail);

            if(likes.find((item:any) => item.stringValue === curEmail) === undefined) 
                setDidLike(false);
            else 
                setDidLike(true);
        
    }, [likes])
    
    useEffect(() => {
        if(isOpen) setStyle("flex");
        else setStyle("invisible");
    }, [isOpen])

    const handleClickExit = (e:any) => {
        if(e.target.id === 'outside-view')
            setIsOpen(false);
    }

    const handleLikes = () => {
        if(post && likes !== "") {
            // 나의 좋아요가 없는 경우
            if(!didLike) {
                Likes(post, idToken, likes, setLikes)
                .then((res) => {
                    console.log("좋아요 성공", res);
                    setDidLike(true);
                })
                .catch((err) => {
                    console.log("좋아요 실패", err);
                })
            } else {
                setDidLike(true);
            }
        }
    }
    useEffect(() => {
        console.log('didlikes : ', didLike)
    }, [didLike])

    const handleCommentInput = () => {
        if(post && comment !== "") {
            UploadComment(post, idToken, comment, comments, setComments)
            .then((res) => {
                console.log("댓글 추가 성공", res);
                setComment("");
            })
            .catch((err) => {
                console.log("댓글 추가 실패", err);
            })
        }
    }

    return (
        <div 
            id="outside-view" 
            onClick={handleClickExit}
            className={`w-screen h-screen center fixed backdrop-blur-lg mt-[-20vh] z-[1000] ${style}`} 
        >
            <div className="flex w-[60vw] h-[85vh] bg-white shadow-2xl">
                <div className="flex w-2/3 h-full ">
                    <PostSlider post={post} />
                </div>
                <div className="w-1/3 h-full flex flex-col">
                    {/* 요소를 바닥에 고정시키기 위해서는 중간 요소에 flex-1을 주면 됨 */}
                    <div className="p-6 flex-1">

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
                        { comments !== undefined && comments.map((item:any, index:number) => {
                            return (
                                <div key={index}>
                                    <p className="nnn text-[0.8rem] mt-6">
                                        {item.mapValue !== undefined && item.mapValue.fields.user.stringValue}
                                    </p>
                                    <p className="nnn text-[0.7rem]">
                                        {item.mapValue !== undefined && item.mapValue.fields.comment.stringValue}
                                    </p>
                                </div>    
                            )
                            })}
                        </div>
                    </div>

                    {/* 좋아요 및 댓글 입력 */}
                    <div className="flex flex-col h-[10vh] border-t-[1px]">

                        {/* 좋아요 */}
                        <div className="flex flex flex-1 mt-1">
                            { didLike ?
                                <LikesAnim onClick={handleLikes}>
                                    <FI
                                        sx={{color:'red'}}
                                        className="w-4 mt-[-1vh] ml-3 cursor-pointer" 
                                    />
                                </LikesAnim>
                                :
                                <LikesAnim onClick={handleLikes}>
                                    <FB 
                                        sx={{color:'#000'}} 
                                        className="w-4 mt-[-1vh] ml-3 cursor-pointer"  
                                    />
                                </LikesAnim>
                            }
                            <p className="nnn text-[0.8rem] ml-1">
                                {likes.length} 명이 좋아합니다
                            </p>
                        </div>

                        {/* 댓글 */}
                        <div className="flex flex-row">
                            <input 
                                value={comment}
                                onChange={(e)=>setComment(e.target.value)}  
                                placeholder="댓글을 입력하세요"  
                                className="focus:outline-none text-[0.8rem] text-black nnn p-1 pl-4 w-5/6"
                            />
                            <button 
                                onClick={handleCommentInput}
                                className="w-1/6 rounded-xl text-[0.7rem] nnn text-black"
                            >
                                입력
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const LikesAnim = styled.div`
    transition: 0.15s ease;
    height: 2vh;
    transform-origin: center;
    &:active {
        scale:1.3
    }
`