'use client';

import Image from "next/image";
import PostSlider from "./postSlider";
import styled from "styled-components";
import PostContent from "./postContent";
import FI from '@mui/icons-material/Favorite';
import Modify from '@mui/icons-material/Create';
import FB from '@mui/icons-material/FavoriteBorder';
import Delete from '@mui/icons-material/DeleteOutline';
import profile from '@/public/defaultProfilePic.jpeg';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { deletePost } from "./functions/deletePost";
import { removeLike } from "./functions/removeLike";
import { uploadLike } from "./uploadLike";
import { useRecoilState, useRecoilValue } from "recoil";
import { getProfile } from "@/app/functions/getProfile";
import { UploadComment } from "./uploadComment";
import { curPostStore, idTokenStore, isPostViewOpenStore, postCreatedStore, selectedPointStore, userDataStore } from "../../recoilContextProvider";
import { swtichName } from "@/app/functions/switchName";


export interface userInfo {
    displayName: string,
    photoURL: string,
    follow: Array<string>,
    follower: Array<string>
}

export default function PostView() {
    const router = useRouter();
    const idToken = useRecoilValue(idTokenStore);
    const userData = useRecoilValue(userDataStore);
    const selectedPoint = useRecoilValue(selectedPointStore);
    const [post, setPost] = useRecoilState(curPostStore);
    const [likes, setLikes] = useState<any>([0]);
    const [comment, setComment] = useState<string>("");
    const [comments, setComments] = useState<any>([]);
    const [didLike, setDidLike] = useState<boolean>(false);
    const [postId, setPostId] = useState<string>("");
    const [style, setStyle] = useState<string>("invisible");
    const [displayName, setDisplayName] = useState<string>("");
    const [displayPoint, setDisplayPoint] = useState<string>("");
    const [isOpen, setIsOpen] = useRecoilState(isPostViewOpenStore);
    const [isModify, setIsModify] = useState<boolean>(false);
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
                let temp:any[] = [];
            }
            
            if(post.name !== undefined) {
                const splitted = post.name.split('/');
                setPostId(splitted[6]);
            }

            // comments의 사용자 정보 가져오고 display하기
            post.comments.map((item:any) => {
                let email = item.mapValue.fields.user.stringValue;
                getProfile(email)
                .then((res:any) => {
                    let data:any, tempPhoto;
                    if(res !== undefined) {
                        if(res.photoURL !== "") tempPhoto = res.photoURL;
                        else tempPhoto = profile;
                        data = {
                            user: res.displayName, 
                            photoURL: tempPhoto, 
                            email: email, 
                            comment: item.mapValue.fields.comment.stringValue
                        };
                    }
                    setComments((prev:any) => [...prev, data]);
                })
            })
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

    useEffect(() => {
        // 영어 지역명 -> 한글 지역명
        let switchedPoint = swtichName(selectedPoint);
        if(switchedPoint !== undefined)
            setDisplayName(switchedPoint);
    }, [selectedPoint])

    const handleClickExit = (e:any) => {
        // 바깥 영역 클릭시 모달 제거 -> post 갱신해야 함
        if(e.target.id === 'outside-view') {
            if(isModify) {
                if(window.confirm('게시물 수정을 취소하시겠습니까?')) 
                    resetData();
            } else
                resetData();
        }

        function resetData() {
            setIsOpen(false);
            // 나가면서 값 갱신함으로써 useEffect 의존성 활성화되도록 함
            setComments([]);
            setLikes([0]);
            setIsModify(false);
        }
    }

    const handleLikes = () => {
        if(post && likes !== "") uploadLike(post, idToken, likes, setLikes);
        else setDidLike(true);
    }

    const handleUnlikes = () => {
        if(post) removeLike(post, idToken, likes, setLikes)
    }

    const handleCommentInput = () => {
        let curEmail = localStorage.getItem('ddym-email');
        if(post && comment !== "") {
            UploadComment(post, idToken, comment, post.comments);
            if(curEmail) getProfile(curEmail)
            .then((res) => {
                if(res !== undefined) {
                    let temp = {
                        email: curEmail,
                        photoURL: res?.photoURL,
                        comment: comment,
                        user: res?.displayName
                    }
                    setComments((prev:any) => [...prev, temp]);
                }
            })
            setComment("");
        }
    }

    const handleClickDelete = () => {
        if(window.confirm("게시물을 삭제하시겠습니까?")) {
            if(post?.name !== undefined) {
                deletePost(postId, post?.name, post?.photo.length)
                .then(() => {
                    setIsOpen(false);
                    setPost(null);
                })
            }
        }
    }

    const handleClickModify = () => {
        setIsModify(true);
    }

    const handleClickProfile = (email:string) => {
        router.push(`/profile/${email}`);
    }

    return (
        <div 
            id="outside-view" 
            onClick={handleClickExit}
            className={`w-screen h-screen center fixed backdrop-blur-lg mt-[-20vh] z-[1000] ${style}`} 
        >
            <div className="flex w-[60vw] h-[80vh] bg-white shadow-2xl">
                <div className="w-2/3 h-full">
                    <PostSlider post={post} />
                </div>
                <div className="w-1/3 h-full flex flex-col">
                    {/* 요소를 바닥에 고정시키기 위해서는 중간 요소에 flex-1을 주면 됨 */}
                    <div className="p-6 flex-1">
                        {/* 작성자 정보 */}
                        <div className="">
                            <div className="flex nnn">
                                { userData?.photoURL === undefined ? <Image src={profile} alt="profile" className="rounded-full w-[1.5vw] mr-3 mt-1" /> : <></>}
                                <div className="flex flex-col">
                                    { userData?.displayName === undefined ? <p>{displayName}</p> : <>{userData.displayName}</>}
                                    <p className="text-[0.7rem] text-gray-500">{displayPoint}</p>
                                </div>
                            </div>
                            <div className="mt-2 ml-10">
                                <PostContent 
                                    post={post} 
                                    setIsModify={setIsModify}
                                    isModify={isModify} 
                                    postId={postId} 
                                    idToken={idToken}
                                />
                            </div>
                        </div>

                        {/* 댓글 */}
                        <div className="w-full h-full pt-10 overflow-auto">
                        { comments !== undefined && comments.map((item:any, index:number) => {
                            return (
                                <div key={index} className="mt-6 flex">
                                    <div 
                                        className="flex cursor-pointer"
                                        onClick={() => handleClickProfile(item.email)}
                                    >
                                        <Image 
                                            src={item.photoURL} 
                                            width={30} 
                                            height={30} 
                                            alt="profile" 
                                            className="rounded-full object-cover aspect-square"
                                        />
                                        <p className="nnb text-[0.8rem] ml-1">
                                            {item.user}
                                        </p>
                                    </div>
                                    <p className="nnn text-[0.7rem] ml-3">
                                        {item.comment}
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