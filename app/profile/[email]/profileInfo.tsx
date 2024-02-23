'use client';

import Image from 'next/image';
import Setting from '@mui/icons-material/Settings';
import ProfilePic from "../profilePic/profilePic";
import tempProPic from '@/public/defaultProfilePic.jpeg';
import { UpdateFollower } from './updateFollower';
import { useRecoilValue } from 'recoil';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchUserPost } from '../fetchUserPost';
import { getProfile } from '../../functions/getProfile';
import { idTokenStore } from '@/app/recoilContextProvider';

interface Props {
    email: string
}

export default function ProfileInfo(props:Props) {
    const router = useRouter();
    const idToken = useRecoilValue(idTokenStore);
    let email = props.email;
    let myEmail:string | null; 
    if(typeof window !== undefined) myEmail = localStorage.getItem('ddym-email');
    const textStyle = "text-white text-[1rem]";
    const [isMyProfile, setIsMyProfile] = useState<boolean>(false);
    const [displayName, setDisplayName] = useState<string>("test");
    const [follow, setFollow] = useState<Array<{stringValue:string}>>([]);
    const [follower, setFollower] = useState<Array<{stringValue:string}>>([]);
    const [isFollowing, setIsFollowing] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isFollowModal, setIsFollowModal] = useState<boolean>(true);
    const [photoURL, setPhotoURL] = useState<string>("");
    const [posts, setPosts] = useState<any>([]);
    const listStyle = "text-white nnn mt-4 cursor-pointer";

    useEffect(() => {
        getProfile(email)
        .then((res) => {
            if(res !== undefined) {
                if(res.displayName !== "" && res.displayName !== undefined) setDisplayName(res.displayName);
                else setDisplayName(email);
                if(res.follow !== undefined) setFollow(res.follow);
                else setFollow([]);
                if(res.follower !== undefined) setFollower(res.follower);
                else setFollower([]);
                if(res.photoURL !== "" && res.photoURL !== undefined) setPhotoURL(res.photoURL);
                if(email === myEmail) setIsMyProfile(true);
                else setIsMyProfile(false);
            }
        })
        // 한번에 전체 게시물 가져오기
        fetchUserPost(email)
        .then((res) => {
            setPosts(res);
        })
    }, [])

    // 팔로우 중이라면 표시
    useEffect(() => {
        if(follow.find((item) => item.stringValue === myEmail))
            setIsFollowing(true);
    }, [follower])

    const handleClickSetting = () => {
        router.push('/setting/edit');
    }

    const handleClickFollowList = () => {
        setIsModalOpen(true);
        setIsFollowModal(true);
    }

    const handleClickFollowerList = () => {
        setIsModalOpen(true);
        setIsFollowModal(false);
    }

    const handleClickProfile = (email:string) => {
        router.push(`/profile/${email}`);
    }

    const handleClickExit = (e:any) => {
        if(e.target.id === 'outside-view') {
            setIsModalOpen(false);
        }
    }

    const handleFollow = () => {
        setIsFollowing(true);
        let updateList = [...follower];
        if(myEmail) updateList.push( { stringValue: myEmail } );
        setFollower(updateList);
        UpdateFollower(idToken, email, updateList)
        .then((res:any) => {
            console.log("팔로우 성공", res);
        })
    }

    const handleUnfollow = () => {
        setIsFollowing(false);
        let updateList = [...follower];
        let findIndex = updateList.findIndex((item) => item.stringValue === myEmail);
        updateList.splice(findIndex, 1);
        setFollower(updateList);
        UpdateFollower(idToken, email, updateList)
        .then((res:any) => {
            console.log("언팔로우 성공", res);
        })
    }

    return (
        <div>
            {/* 팔로우, 팔로워 모달창 */}
            { isModalOpen ? 
                <div 
                    id="outside-view" 
                    onClick={handleClickExit} 
                    className='fixed w-screen h-[100vh] z-[100] center mt-[-20vh] backdrop-blur-sm'
                >
                    <div className='bg-stone-800 w-[25vw] h-[35vh] rounded-2xl shadow-2xl'>
                        <div className='border-b-[1px] border-stone-600 w-full h-[4vh] center'>
                            <p className='text-white nnn'>
                                {isFollowModal ? "팔로우" : "팔로워"}
                            </p>
                        </div>
                        <div className='p-6'>
                        { isFollowModal ?
                            follow.map((item:any, index:number) => {
                                return <p 
                                            key={index}
                                            onClick={()=>handleClickProfile(item.stringValue)} 
                                            className={listStyle}
                                        >
                                        {item.stringValue}
                                        </p>
                            }) :
                            follower.map((item:any, index:number) => {
                                return <p 
                                            key={index} 
                                            onClick={()=>handleClickProfile(item.stringValue)} 
                                            className={listStyle}
                                        >
                                        {item.stringValue}
                                        </p>
                            })
                        }
                        </div>
                    </div>
                </div>
                :
                <></>
            }
            <div className="center fixed ml-[-10vw]">
                { isMyProfile ? 
                    <ProfilePic /> 
                        : 
                        photoURL === "" ? 
                            <Image 
                                src={tempProPic} 
                                width={200} 
                                height={200} 
                                alt="..." 
                                className='rounded-full aspect-square object-cover' 
                            /> 
                            : 
                            <Image 
                                src={photoURL} 
                                width={200} 
                                height={200} 
                                alt="..." 
                                className='rounded-full aspect-square object-cover' 
                            /> 
                }
                <div className="flex flex-col ml-4">
                    <div className="flex items-center"> 
                        <p className="text-white nnn text-[1.5rem]">
                            {displayName}
                        </p>
                        { isMyProfile ?
                            <Setting 
                                className="cursor-pointer ml-2 z-[1000]" 
                                onClick={handleClickSetting} 
                            />
                            :
                            isFollowing ?
                                <button
                                    onClick={handleUnfollow}
                                    className='border-[1px] border-gray-400 rounded-md ml-3 h-[2vh] center p-1'
                                >
                                    <p className='text-gray-400 text-[0.6rem] nnl'>팔로우 중</p>
                                </button>
                                :
                                <button 
                                    onClick={handleFollow}
                                    className='bg-white rounded-md ml-3 nnl text-black text-sm h-[2vh] center p-1'
                                >
                                    팔로우
                                </button>
                        }
                    </div>
                    <div className="flex">
                        <p className={`${textStyle} nnn`}>팔로우</p>
                        <p className={`${textStyle} nnb ml-1 cursor-pointer`} onClick={handleClickFollowList}>100</p>
                        <p className={`${textStyle} nnn ml-3`}>팔로워</p>
                        <p className={`${textStyle} nnb ml-1 cursor-pointer`}onClick={handleClickFollowerList}>100</p>
                    </div>  
                </div>
            </div>
        </div>
    )
}