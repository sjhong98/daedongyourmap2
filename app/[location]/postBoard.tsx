'use client';

import Image from "next/image";
import styled from "styled-components";
import { fetchPost } from "./fetchPost";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { curPostStore, isPostViewOpenStore, PostType } from "../recoilContextProvider";

export default function PostBoard( props:{data:PostType[], data2:any, location:string} ) {
    const setCurPost = useSetRecoilState(curPostStore);
    const gridStyle = "grid grid-cols-3 gap-1"
    const [posts, setPosts] = useState<PostType[] | undefined>(props.data);
    const [postViewOpen, setPostViewOpen] = useRecoilState(isPostViewOpenStore);
    
    // postView 열기
    const handleClickPost = (item:PostType) => {
        setCurPost(item);
        setPostViewOpen(true);
    }

    // postView 닫히면 post update
    useEffect(() => {
        const res = fetchPost(props.location);
        res.then((res) => {
            setPosts(res);
            console.log("post updated", res);
        })
    }, [postViewOpen])

    return (
        <div className={gridStyle}>
        { posts!==undefined && posts.map((item:PostType, index:number) => {
            return (
            <Wrapper 
                key={index} 
                className="center"
                onClick={()=>handleClickPost(item)}
            >
                <p className="absolute text-white nnn opacity-0 z-[100]">{item.title}</p>
                <div>
                    <Image 
                        src={item.photo!==undefined && item.photo[0].stringValue} 
                        alt={item.title} 
                        width={400} 
                        height={400} 
                        className="aspect-square object-cover object-center w-[20vw]"
                    />
                </div>
            </Wrapper>
            )
        })}
        </div>
    )
}

const Wrapper = styled.div`
    transition: 0.2s ease;
    cursor: pointer;
    &:hover div{
        filter: brightness(.5);
    }
    &:hover p{
        opacity: 1;
    }
`
