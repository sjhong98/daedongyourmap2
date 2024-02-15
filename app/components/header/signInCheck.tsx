"use client";

import Image from "next/image";
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import defaultProfilePic from '@/public/defaultProfilePic.jpeg';
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { styled } from "@mui/material/styles";
import { getAuth, signOut } from "firebase/auth";
import { firebaseConfig } from "@/firestore/config";
import { useRecoilState, useSetRecoilState } from "recoil";
import { ProfileType, idTokenStore, isLoginStore, profileStore } from "@/app/recoilContextProvider";

export default function SignInCheck() {
    const router = useRouter();
    const setIdToken = useSetRecoilState(idTokenStore);
    const [profilePic, setProfilePic] = useState<any>("");
    const [isLogin, setIsLogin] = useRecoilState(isLoginStore);
    const [displayName, setDisplayName] = useState<string>("");
    const [profile, setProfile] = useRecoilState<ProfileType>(profileStore);
    initializeApp(firebaseConfig);
    
    const handleBtnClick = () => {
        router.push('/signin');
    }

    const handleSignOut = () => {
        console.log("로그아웃");
        signOut(getAuth());
        setIsLogin(false);
        localStorage.setItem('ddym-refresh-token', "none");
    }

    const handleClickProfile = () => {
        let email = localStorage.getItem('ddym-email');
        router.push(`/profile/${email}`);
    }

    const handleClickAdd = () => {
        router.push('/create');
    }

    useEffect(() => {
        // idToken 갱신
        const refreshCount = async () => {
            const refreshToken = localStorage.getItem('ddym-refresh-token');
            const res = fetch(`https://securetoken.googleapis.com/v1/token?key=AIzaSyCA6Q_TA6dyl7wf2BtR_V_oEVIW2_Q94y0`, {
                method: 'POST',
                body: JSON.stringify({
                    grant_type: "refresh_token",
                    refresh_token: refreshToken
                })
            });
            (await res).json()
            .then((res) => {
                console.log("로그인 상태");
                setIsLogin(true);
                setIdToken(res.access_token);
                const auth = getAuth();
                auth.onAuthStateChanged((user) => {
                    if(user && user.email) {
                        let temp = {
                            email: user.email,
                            emailVerified: user.emailVerified,
                            displayName: user.displayName,
                            photoURL: user.photoURL
                        }
                        setProfile(temp);
                    }
                })
                localStorage.setItem('ddym-refresh-token', res.refresh_token);
            })
        }

        // sign out 시 none이 됨
        if(localStorage.getItem('ddym-refresh-token') !== "none")
            refreshCount();
        else {
            console.log("로그아웃 상태");
            setIsLogin(false);
        }
    }, [])

    useEffect(() => {
        let email = localStorage.getItem('ddym-email');
        if(profile.photoURL) setProfilePic(profile.photoURL);
        else setProfilePic(defaultProfilePic);

        if(profile.displayName) setDisplayName(profile.displayName);
        else if(email) setDisplayName(email);
    }, [profile])

    return (
        <div>
        { isLogin ? 
            <div className="flex">
                <div className="mt-3">
                    <AddIcon className="cursor-pointer mr-4" onClick={handleClickAdd} />
                </div>
                <Image 
                    src={profilePic} 
                    width={50} 
                    height={50} 
                    alt="profile" 
                    className="rounded-full object-cover aspect-square mr-2" 
                />
                <button onClick={handleClickProfile}>{displayName}</button> 
                <LogoutIcon onClick={handleSignOut} className="ml-3 mt-3" />
            </div>
            : 
            <LoginBtn variant="text" onClick={handleBtnClick} >Sign In</ LoginBtn> 
        }
        </div>
    )
}

const LoginBtn = styled(Button)({
    color: 'white',
    fontSize: '1rem',
    '&:hover': {
        backgroundColor:'white',
        color: '#003545',
        boxShadow: 'none',
    }
})