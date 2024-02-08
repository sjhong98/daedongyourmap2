'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { curPostStore, isPostViewOpenStore, PostType } from "../recoilContextProvider";

export default function PostBoard( props:{data:PostType[], data2:any} ) {
    const [posts, setPosts] = useState<PostType[]>(props.data);
    const setPostViewOpen = useSetRecoilState(isPostViewOpenStore);
    const setCurPost = useSetRecoilState(curPostStore);
    const gridStyle = "grid grid-rows-3 grid-flow-col gap-1"

    const handleClickPost = (item:PostType) => {
        setCurPost(item);
        setPostViewOpen(true)
    }

    useEffect(() => {
        console.log(props.data2);
    }, [])

    return (
        <div className={gridStyle}>
        { posts.map((item:PostType, index:number) => {
            return (
            <Wrapper 
                key={index} 
                className="center"
                onClick={()=>handleClickPost(item)}
            >
                <p className="absolute text-white nnn opacity-0 z-[100]">{item.title}</p>
                <div>
                    <Image 
                        src={item.photo[0].stringValue} 
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