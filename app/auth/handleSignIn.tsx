import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firestore/config";
import { Dispatch, SetStateAction } from 'react';
import { UserDataType } from '../components/signin';

initializeApp(firebaseConfig);

interface propsType {
    email:string,
    pw:string,
    setUc:Dispatch<SetStateAction<UserDataType | undefined>>
}

