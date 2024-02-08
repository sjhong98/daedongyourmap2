'use client';

import Image from "next/image";
import Input from "../modules/input";
import Logo from '@/public/daedong.png';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { initializeApp } from "firebase/app";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { firebaseConfig } from "@/firestore/config";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "firebase/auth";

export default function SignUp() {
    const router = useRouter();
    const [email, setEmail] = useState<string>("");
    const [pw, setPw] = useState<string>("");
    const [nickname, setNickname] = useState<string>("");
    const [msg, setMsg] = useState<string>("");

    const handleBtnClick = () => {
        if(pw.length < 8) {
            setMsg("비밀번호는 8자 이상이어야 합니다");
        } else if(email !== "" && pw !== "" && nickname !== "") {
            initializeApp(firebaseConfig)
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, pw)
                .then((uc) => {
                    if(auth.currentUser)
                        sendEmailVerification(auth.currentUser);
                    router.push('/signup/verify');
                })
                .catch((err) => {
                    if(err.code === "auth/email-already-in-use")
                        setMsg("이미 존재하는 이메일입니다")
                })
        } else 
            setMsg("모두 입력하세요");
    }

    return (
        <div className="center">
            <div className="flex flex-col items-center bg-white shadow-2xl rounded-3xl w-[25vw] h-[60vh]">
                <Image src={Logo} alt="logo" width={300} className="mt-12 mb-10" />
                <p className="text-2xl mb-10 lml">Sign Up</p>
                <Input state={email} setState={setEmail} ph="email" />
                <Input state={pw} setState={setPw} ph="password" type="password" />
                <p className="text-[0.7rem] text-gray-400 mt-[-1vh] mb-3">비밀번호 8자 이상</p>
                <Input state={nickname} setState={setNickname} ph="nickname" />
                <p className="text-sm text-red-500">{msg}</p>
                <SignUpBtn variant="text" onClick={handleBtnClick} >sign up</SignUpBtn>
            </div>
        </div>
    )
}

const SignUpBtn = styled(Button)({
    color: '#003545',
    fontSize: '1rem',
    width: '10vw',
    '&:hover': {
        backgroundColor:'#003545',
        color: 'white',
        boxShadow: 'none',
    }
})