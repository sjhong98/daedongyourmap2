"use client";

import { useEffect } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { initializeApp } from "firebase/app";
import { styled } from "@mui/material/styles";
import { getAuth, signOut } from "firebase/auth";
import { firebaseConfig } from "@/firestore/config";
import { useRecoilState, useSetRecoilState } from "recoil";
import { idTokenStore, isLoginStore } from "@/app/recoilContextProvider";

export default function SignInCheck() {
    const router = useRouter();
    const [isLogin, setIsLogin] = useRecoilState(isLoginStore);
    const setIdToken = useSetRecoilState(idTokenStore);
    const email = localStorage.getItem('ddym-email');
    initializeApp(firebaseConfig);
    
    const handleBtnClick = () => {
        router.push('/signin');
    }

    // const handleSignOut = () => {
    //     console.log("로그아웃");
    //     signOut(getAuth());
    //     setIsLogin(false);
    //     localStorage.setItem('ddym-refresh-token', "none");
    // }

    const handleClickProfile = () => {
        
    }

    useEffect(() => {
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
                localStorage.setItem('ddym-refresh-token', res.refresh_token);
                setIdToken(res.access_token);
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

    return (
        <div>
        { isLogin ? 
            <button onClick={handleClickProfile}>{email}</button> 
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