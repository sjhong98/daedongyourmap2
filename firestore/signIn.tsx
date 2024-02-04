import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { Dispatch, SetStateAction } from 'react';
import { UserDataType } from '@/app/auth/signIn';

initializeApp(firebaseConfig);

interface propsType {
    email:string,
    pw:string,
    setUc:Dispatch<SetStateAction<UserDataType | undefined>>
}

export function handleSignIn(props:propsType) {
    const auth = getAuth();
    let idToken:string;
    signInWithEmailAndPassword(auth, props.email, props.pw)
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
                expiresIn: "3600",
                refreshToken: res.user.refreshToken,
                displayName: res.user.displayName,
            }
            props.setUc(temp);
        }));
        
        
    })
    .catch((err) => {
        console.log("로그인 실패 : ", err);
    })
}