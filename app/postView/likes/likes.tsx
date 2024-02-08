import { PostType } from "@/app/recoilContextProvider";
import { firebaseConfig } from "@/firestore/config";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { Dispatch } from "react";

export async function Likes(post:PostType, idToken:string, likes:any, setLikes:Dispatch<any>) {
    initializeApp(firebaseConfig);
    const auth = getAuth();
    let temp:any[] = [];
    if(likes.length !== 0) {
        temp = [...likes];
    }
    temp.push( { stringValue : auth.currentUser && auth.currentUser.email })
    console.log(temp);
    const res = fetch(`https://firestore.googleapis.com/v1/${post.name}?updateMask.fieldPaths=likes`, {
        method: 'PATCH',
        headers: {
            "Authorization": `Bearer ${idToken}`
        },
        body: JSON.stringify({
            fields: {
                likes: {
                    arrayValue: {
                        values: temp 
                    }
                }
            }
        })
    })
    setLikes(temp);
    return (await res).json();
}