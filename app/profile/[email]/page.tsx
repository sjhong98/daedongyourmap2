'use client';

import Image from 'next/image';
import SI from '@mui/icons-material/Settings';
import ProfilePic from "../profilePic/profilePic";
import tempProPic from '@/public/defaultProfilePic.jpeg';
import { useRecoilValue } from "recoil";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchUserPost } from '../fetchUserPost';
import { getProfile } from '../../functions/getProfile';
import { userInfo } from '@/app/[location]/postView/postView';
import { ProfileType, profileStore } from "../../recoilContextProvider";

type Props = {
    params: { email: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export default function Profile(props: Props) {
    const router = useRouter();
    let email = props.params.email.replace('%40', '@');
    const textStyle = "text-white text-[1rem]";
    let myEmail:string;
    if(localStorage !== undefined)
        localStorage.getItem('ddym-email');
    const [isMyProfile, setIsMyProfile] = useState<boolean>(false);
    const [displayName, setDisplayName] = useState<string>("test");
    const [follow, setFollow] = useState<Array<string>>([]);
    const [follower, setFollower] = useState<Array<string>>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isFollow, setIsFollow] = useState<boolean>(true);
    const [photoURL, setPhotoURL] = useState<string>("");
    const [posts, setPosts] = useState<any>([]);
    const listStyle = "text-white nnn mt-4 cursor-pointer";

    useEffect(() => {
        getProfile(email)
        .then((res) => {
                                                                // if(res.follow !== undefined) 
                                                                setFollow(['sjhong98@Icloud.com', 'elyont98@naver.com', 'test@test.com']); // ****** delete
                                                                // if(res.follower !== undefined) 
                                                                setFollower(['sjhong98@Icloud.com', 'elyont98@naver.com', 'test@test.com']);
            if(res !== undefined) {
                if(res.displayName !== "" && res.displayName !== undefined) setDisplayName(res.displayName);
                else setDisplayName(email);
                // if(res.follow !== undefined) 
                    setFollow(['sjhong98@Icloud.com', 'elyont98@naver.com', 'test@test.com']); // ****** need modify
                // if(res.follower !== undefined) 
                    setFollower(['sjhong98@Icloud.com', 'elyont98@naver.com', 'test@test.com']);
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

    const handleClickSetting = () => {
        router.push('/setting/edit');
    }

    const handleClickFollow = () => {
        setIsModalOpen(true);
        setIsFollow(true);
    }

    const handleClickFollower = () => {
        setIsModalOpen(true);
        setIsFollow(true);
    }

    const handleClickProfile = (email:string) => {
        router.push(`/profile/${email}`);
    }

    const handleClickExit = (e:any) => {
        if(e.target.id === 'outside-view') {
            setIsModalOpen(false);
        }
    }

    return (
        <div className="flex w-screen h-full">
            { isModalOpen ? 
                <div id="outside-view" onClick={handleClickExit} className='fixed w-screen h-[100vh] z-[100] center mt-[-20vh] backdrop-blur-sm'>
                    <div className='bg-stone-800 w-[25vw] h-[35vh] rounded-2xl shadow-2xl'>
                        <div className='border-b-[1px] border-stone-600 w-full h-[4vh] center'>
                            <p className='text-white nnn'>{isFollow ? "팔로우" : "팔로워"}</p>
                        </div>
                        <div className='p-6'>
                        { isFollow ?
                            follow.map((item:string, index:number) => {
                                return <p key={index} onClick={()=>handleClickProfile(item)} className={listStyle}>{item}</p>
                            }) :
                            follower.map((item:string, index:number) => {
                                return <p key={index} onClick={()=>handleClickProfile(item)} className={listStyle}>{item}</p>
                            })
                        }
                        </div>
                    </div>
                </div>
                :
                <></>
            }
            <div className="w-1/3 h-full center">
                { isMyProfile ? <ProfilePic /> : photoURL === "" ? <Image src={tempProPic} width={200} height={200} alt="..." className='rounded-full' /> : <Image src={photoURL} width={200} height={200} alt="..." className='rounded-full' /> }
                <div className="flex flex-col ml-4">
                    <div className="flex items-center"> 
                        <p className="text-white nnn text-[1.5rem]">{displayName}</p>
                        <SI className="cursor-pointer ml-2" onClick={handleClickSetting} />
                    </div>
                    <div className="flex">
                        <p className={`${textStyle} nnn`}>팔로우</p>
                        <p className={`${textStyle} nnb ml-1 cursor-pointer`} onClick={handleClickFollow}>100</p>
                        <p className={`${textStyle} nnn ml-3`}>팔로워</p>
                        <p className={`${textStyle} nnb ml-1 cursor-pointer`}onClick={handleClickFollower}>100</p>
                    </div>  
                </div>
            </div>
            <div className="w-2/3 h-full center">
                hlelo
            </div>
        </div>
    )
}

