"use client";

import { firebaseConfig } from "@/firestore/config";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
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
                setIsLogin(true);
            } else {
                console.log("로그아웃 상태");
                localStorage.setItem('ddym-isLogin', 'false');
                setIsLogin(false);
            }
        })
    }, [])

    return (
        <div>
        { isLogin ? <button onClick={()=>signOut(getAuth())}>Sign Out</button> : <LoginBtn variant="text" onClick={handleBtnClick} >Sign In</ LoginBtn> }
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