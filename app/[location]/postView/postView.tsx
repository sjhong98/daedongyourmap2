'use client';

import Image from "next/image";
import PostSlider from "./postSlider";
import styled from "styled-components";
import FI from '@mui/icons-material/Favorite';
import Modify from '@mui/icons-material/Create';
import FB from '@mui/icons-material/FavoriteBorder';
import Delete from '@mui/icons-material/DeleteOutline';
import profile from '@/public/defaultProfilePic.jpeg';
import { getAuth } from "firebase/auth";
import { fetchPost } from "../fetchPost";
import { removeLike } from "./removeLike";
import { uploadLike } from "./uploadLike";
import { useEffect, useState } from "react";
import { UploadComment } from "./uploadComment";
import { useRecoilState, useRecoilValue } from "recoil";
import { getProfile } from "@/app/functions/getProfile";
import { curPostStore, idTokenStore, isPostViewOpenStore, userDataStore } from "../../recoilContextProvider";
import { deletePost } from "./deletePost";

export interface userInfo {
    displayName: string,
    photoURL: string,
    follow: Array<string>,
    follower: Array<string>
}

export default function PostView() {
    const post = useRecoilValue(curPostStore);
    const idToken = useRecoilValue(idTokenStore);
    const [likes, setLikes] = useState<any>([0]);
    const userData = useRecoilValue(userDataStore);
    const [comments, setComments] = useState<any>([]);
    const [comment, setComment] = useState<string>("");
    const [didLike, setDidLike] = useState<boolean>(false);
    const [postId, setPostId] = useState<string>("");
    const [style, setStyle] = useState<string>("invisible");
    const [displayName, setDisplayName] = useState<string>("");
    const [isOpen, setIsOpen] = useRecoilState(isPostViewOpenStore);
    const btnStyle = {color:'black', width:20, cursor:'pointer'};

    useEffect(() => {
        if(post) {
            // DB에 게시물이 있을 때 -> likes에 넣기 | 없을 때 -> undefined -> 빈 배열 넣기
            if(post.likes !== undefined) {
                setLikes([...post.likes]);
            } else  
                setLikes([]);

            if(post.user !== undefined) {
                getProfile(post.user)
                .then((res) => {
                    if(res !== undefined && res.displayName !== "") setDisplayName(res.displayName);
                    else setDisplayName(post.user);
                })
                let temp = [...comments];
                post.comments.map((item:any, index:number) => {
                    if(item.mapValue.fields.user.stringValue !== "") {
                        getProfile(item.mapValue.fields.user.stringValue)
                        .then((res) => {
                            console.log("test : ", item.mapValue.fields.user.stringValue, res)
                            if(res !== undefined)
                                temp[index].user = res.displayName;
                        })
                    }
                })
                setComments(temp);
            }
            
            if(post.name !== undefined) {
                const splitted = post.name.split('/');
                setPostId(splitted[6]);
            }
        }
    }, [post])

    useEffect(() => {
        // 내가 좋아요 표시한 게시물인지 확인
        let curEmail = localStorage.getItem('ddym-email');
        if(likes.find((item:any) => item.stringValue === curEmail) !== undefined) setDidLike(true);
        else setDidLike(false);
    }, [likes])
    
    useEffect(() => {
        // postView modal 표시 & 없애기
        if(isOpen) setStyle("flex");
        else setStyle("invisible");
    }, [isOpen])

    const handleClickExit = (e:any) => {
        // 바깥 영역 클릭시 모달 제거 -> post 갱신해야 함
        if(e.target.id === 'outside-view') {
            setIsOpen(false);
            // 나가면서 값 갱신함으로써 useEffect 의존성 활성화되도록 함
            setComments([0]);
            setLikes([0]);
        }
    }

    const handleLikes = () => {
        if(post && likes !== "") {
            uploadLike(post, idToken, likes, setLikes)
        } else {
            setDidLike(true);
        }
    }

    const handleUnlikes = () => {
        if(post) 
            removeLike(post, idToken, likes, setLikes)
    }

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

    const fetchUserPost = () => {
        const auth = getAuth();
        auth.onAuthStateChanged((user) => {

        })
    }

    const handleClickDelete = () => {
        if(window.confirm("게시물을 삭제하시겠습니까?")) {
            deletePost(postId);
            setIsOpen(false);
        }
    }

    const handleClickModify = () => {

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
                                { userData?.displayName === undefined ? <p>{displayName}</p> : <>{userData.displayName}</>}
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
                        <div className="flex flex-1 mt-1">
                            { didLike ?
                                // 이미 좋아요 표시한 경우
                                <LikesAnim onClick={handleUnlikes}>
                                    <FI
                                        sx={{color:'red'}}
                                        className="w-4 mt-[-1vh] ml-3 cursor-pointer" 
                                    />
                                </LikesAnim>
                                :
                                // 좋아요 표시하지 않은 경우
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
                            <div className="flex-1" />
                            <div className="mt-[-2px]">
                                <Delete sx={btnStyle} onClick={handleClickDelete} />
                                <Modify sx={btnStyle} onClick={handleClickModify} />
                            </div>
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