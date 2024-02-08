'use client';

import Image from "next/image";
import Input from "../modules/input";
import Logo from '@/public/daedong.png';
import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import { idTokenStore, userDataStore } from "../recoilContextProvider";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {
    const router = useRouter();
    const [email, setEmail] = useState<string>("");
    const [pw, setPw] = useState<string>("");
    const [userData, setUserData] = useRecoilState(userDataStore);
    const setIdToken = useSetRecoilState(idTokenStore);
    const [msg, setMsg] = useState<string>("");

    const handleSignIn = () => {
        if(email !== "" && pw !== "") {
            const auth = getAuth();
            let idToken:string;
            signInWithEmailAndPassword(auth, email, pw)
            .then((res) => {
                console.log("로그인 성공 : ", res);
                if(!res.user.emailVerified) { // ******
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
                        setUserData(temp);
                        setIdToken(idToken);
                        localStorage.setItem('ddym-email', email);
                        // router.push('/');
                        router.push('/');
                    }));
                } else 
                    setMsg("이메일 인증을 완료하세요");
            })
            .catch((err) => {
                console.log("로그인 실패 : ", err);
            })
        } else {
            setMsg("모두 입력하세요");
        }
    }
    
    return (
        <div className="center">
            <div className="flex flex-col items-center bg-white shadow-2xl rounded-3xl w-[25vw] h-[60vh]">
                <Image src={Logo} alt="logo" width={300} className="mt-12 mb-32" />
                <Input 
                    state={email} 
                    setState={setEmail} 
                    ph="email" 
                />
                <Input 
                    state={pw} 
                    setState={setPw} 
                    ph="password" 
                    type="password" 
                />
                <p className="text-sm text-red-500">{msg}</p>
                <SignInBtn variant="text" onClick={handleSignIn} >Sign In</SignInBtn>
                <a className="lml mc text-sm mt-12" href='/signup' >or Sign UP</a>
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