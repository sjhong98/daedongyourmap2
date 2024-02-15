'use client';

import Image from "next/image";
import styled from "styled-components";
import { fetchPost } from "./fetchPost";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { curPostStore, isPostViewOpenStore, postCreatedStore, PostType } from "../recoilContextProvider";

export default function PostBoard( props:{data:PostType[], data2:any, location:string} ) {
    const [target, setTarget] = useState<any>();
    const setCurPost = useSetRecoilState(curPostStore);
    const [posts, setPosts] = useState<PostType[] | undefined>(props.data);
    const [startIndex, setStartIndex] = useState<number>(40);
    const [endIndex, setEndIndex] = useState<number>(80);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [firstRender, setFirstRender] = useState<boolean>(true);
    const [postCreated, setPostCreated] = useRecoilState(postCreatedStore);
    const [postViewOpen, setPostViewOpen] = useRecoilState(isPostViewOpenStore);
    
    // postView 열기
    const handleClickPost = (item:PostType) => {
        setCurPost(item);
        setPostViewOpen(true);
    }

    // useEffect(() => {
    //     console.log(props.data2);
    // }, [])

    // postView 닫히면 post update
    useEffect(() => {
        if(!firstRender || postCreated) {
            const res = fetchPost(startIndex-40, props.location, endIndex-40);
            res.then((res) => {
                let temp:any[] = [];
                if(posts !== undefined) {
                    temp = [...posts];
                    temp.splice(startIndex-40, 40, ...res);
                    setPosts(temp);
                    setPostCreated(false);
                    console.log("post updated", res);
                }
            })
        } else
        setFirstRender(false);
    }, [postViewOpen])

    useEffect(() => {
        const options = {
          root: null,
          threshold: 0.8  
        }

        const handleFetchData = ([entry]:any) => {
            if(entry.isIntersecting) {
                console.log("진입", startIndex, endIndex);
                const res = fetchPost(startIndex, props.location, endIndex);
                res.then((res) => {
                    let temp:any[] = [];
                    if(posts !== undefined) {
                        temp = [...posts, ...res];
                        setPosts(temp);
                        setStartIndex((prev)=>prev+40);
                        setEndIndex((prev)=>prev+40);
                        setIsLoading(true);
                        setTimeout(() => {
                            setIsLoading(false);
                        }, 2000);
                    }
                })
            }
        }
    
        let observer:any;
        if(target) {
          observer = new IntersectionObserver(handleFetchData, options);
          observer.observe(target);
        }
        return () => {
          if(observer)
          observer.disconnect();
        };
      }, [target, endIndex]);

    return (
        <div>
            <div className="grid grid-cols-3 gap-1">
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
            <div className="flex flex-col">
                <div className="w-full h-[100vh]" />
                {/* { isLoading ? <></> : <div ref={setTarget} className="w-screen h-[10vh] bg-red-500" /> } */}
            </div>
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
