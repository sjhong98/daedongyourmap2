'use client';

import { useState } from "react";
import Input from "../modules/input";
import Image from "next/image";
import Logo from '@/public/daedong.png';
import { Button, styled } from "@mui/material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useSetRecoilState } from "recoil";
import { idTokenStore } from "../recoilContextProvider";

export interface UserDataType{
    email:string | null,
    uid:string,
    photoURL:string | null,
    idToken: string,
    refreshToken: string,
    displayName: string | null
}

export default function SignIn() {
    const [email, setEmail] = useState<string>("");
    const [pw, setPw] = useState<string>("");
    const setUc

    const handleSignIn = () => {
        const auth = getAuth();
        let idToken:string;
        signInWithEmailAndPassword(auth, email, pw)
        .then((res) => {
            console.log("로그인 성공 : ", res);
            res.user.getIdToken(true)
            .then((token => {
                idToken = token;
                let temp = {
                    uid: res.user.uid,
                    photoURL: res.user.photoURL,
                    email: res.user.email,
                    idToken: idToken,
                    refreshToken: res.user.refreshToken,
                    displayName: res.user.displayName,
                }
                setUc(temp);
            }));
            
            
        })
        .catch((err) => {
            console.log("로그인 실패 : ", err);
        })
    }
    
    return (
        <div className="center">
            <div className="bg-white rounded-3xl w-[30vw] h-[60vh] center">
                <Image src={Logo} alt="logo" width={300} className="mb-16" />
                <Input 
                    state={email} 
                    setState={setEmail} 
                    ph="email" 
                />
                <div className="mb-4" />
                <Input 
                    state={pw} 
                    setState={setPw} 
                    ph="password" 
                    type="password" 
                />
                <div className="mb-4" />
                <SignInBtn variant="text" onClick={handleSignIn} >Sign In</SignInBtn>
            </div>
        </div>
    )
}

const SignInBtn = styled(Button)({
    color: '#003545',
    fontSize: '1rem',
    width: '10vw',
    '&:hover': {
        backgroundColor:'#003545',
        color: 'white',
        boxShadow: 'none',
    }
})