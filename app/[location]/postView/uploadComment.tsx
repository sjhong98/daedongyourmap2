'use client';

import { PostType } from "@/app/recoilContextProvider";
import { firebaseConfig } from "@/firestore/config";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { Dispatch } from "react";

export async function UploadComment(post:PostType, idToken:string, comment:string, comments:any, setComments:Dispatch<any>) {
    initializeApp(firebaseConfig);
    const auth = getAuth();
    let temp:any[] = [];
    if(comments.length !== 0) {
        temp = [...comments];
    }
    temp.push({ mapValue : 
        { fields : 
            {
                user: { stringValue : auth.currentUser && auth.currentUser.email },
                comment: { stringValue : comment }
            }
        }
    })
    const res = fetch(`https://firestore.googleapis.com/v1/${post.name}?updateMask.fieldPaths=comments`, {
        method: 'PATCH',
        headers: {
            "Authorization": `Bearer ${idToken}`
        },
        body: JSON.stringify({
            fields: {
                comments: {
                    arrayValue: {
                        values: temp 
                    }
                }
            }
        })
    })
    setComments(temp);
    return (await res).json();
}