'use client';

import Image from "next/image";
import styled from "styled-components";
import { fetchPost } from "./fetchPost";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { curPostStore, isPostViewOpenStore, postCreatedStore, PostType, selectedPointStore } from "../recoilContextProvider";
import Naviagator from "./navigator";


export default function PostBoard( props:{data:PostType[], data2:any, location:string} ) {
    const [target, setTarget] = useState<any>();
    const setCurPost = useSetRecoilState(curPostStore);
    const [posts, setPosts] = useState<PostType[]>(props.data);
    const [startIndex, setStartIndex] = useState<number>(30);
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
            let startUpdateIndex;
            if(posts[startIndex-1] !== undefined) 
                startUpdateIndex = +posts[startIndex-1].createTime;        // 모든 게시물 최소 30개씩 만들고, 제대로 업데이트되는지 확인
            else 
                startUpdateIndex = +posts[posts.length-30].createTime;
            const res = fetchPost(props.location, startUpdateIndex);
            res.then((res) => {
                let temp:any[] = [];
                if(posts !== undefined) {
                    temp = [...posts];
                    temp.splice(startIndex-30, 30, ...res);
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
            // posts[startIndex-1] !== undefined일 경우 -> 더 이상 게시물이 없는 경우
            if(entry.isIntersecting && posts[startIndex-1] !== undefined) {
                const res = fetchPost(props.location, +posts[startIndex-1].createTime);
                res.then((res) => {
                    let temp:any[] = [];
                    if(posts !== undefined) {
                        temp = [...posts, ...res];
                        setPosts(temp);
                        setStartIndex(prev => prev+30);
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
    }, [target, startIndex]);

      useEffect(() => {
        console.log("startIndex : ", startIndex);
      }, [startIndex])

    return (
        <div className="flex flex-col">
            <div className="flex-row w-full">
                <Naviagator />
                <div className="grid grid-cols-3 gap-1 w-[50vw]">
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
            </div>
            { isLoading ? <></> : <div ref={setTarget} className="w-full h-[10vh] bg-red-500" /> }
            <div className="w-full h-[10vh]" />
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
