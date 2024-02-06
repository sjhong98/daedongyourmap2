'use client';

import { useEffect, useState } from "react";
import { handleSignIn } from "@/app/auth/handleSignIn";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";
import { idTokenStore } from "../recoilContextProvider";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Button from '@mui/material/Button';
import { styled } from "@mui/material/styles";

export interface UserDataType{
    email:string | null,
    uid:string,
    photoURL:string | null,
    idToken: string,
    refreshToken: string,
    expiresIn: string,
    displayName: string | null
}

function SignInBox() {
    const router = useRouter();
    const [email, setEmail] = useState<string>("");
    const [pw, setPw] = useState<string>("");
    const [uc, setUc] = useState<UserDataType>();
    const idToken = useRecoilValue(idTokenStore)

    const handleBtnClick = () => {
        handleSignIn({email, pw, setUc});
    }

    return (
        <div className="flex flex-col w-[10vw]">
            
            <h1>Sign In</h1>
            <input value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} className="text-black" />
            <input value={pw} placeholder="Password" onChange={(e)=>setPw(e.target.value)} className="text-black" />
            <button onClick={handleBtnClick}>Sign In</button>
        </div>
    )
}
