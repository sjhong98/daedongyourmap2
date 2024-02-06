"use client";

import { firebaseConfig } from "@/firestore/config";
import { Button, styled } from "@mui/material";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SignInCheck() {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState<boolean>(false); 

    const handleBtnClick = () => {
        router.push('/signin');
    }

    useEffect(() => {
        initializeApp(firebaseConfig);
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if(user) {
                console.log("로그인 상태");
                localStorage.setItem('ddym-isLogin', 'true');
                setIsLogin(false);
            } else {
                console.log("로그아웃 상태");
                localStorage.setItem('ddym-isLogin', 'false');
                setIsLogin(false);
            }
        })
    }, [])

    return (
        <div>
        { isLogin ? <></> : <LoginBtn variant="text" onClick={handleBtnClick} >Sign In</ LoginBtn> }
        {/* 로그인 시 프로필 띄우기 */}
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