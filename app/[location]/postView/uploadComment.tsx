'use client';

import { Dispatch } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/firestore/config";
import { PostType } from "@/app/recoilContextProvider";

export async function UploadComment(post:PostType, idToken:string, comment:string, comments:any, setComments:Dispatch<any>) {
    initializeApp(firebaseConfig);
    const email = localStorage.getItem('ddym-email');
    let temp:any[] = [];
    if(comments.length !== 0) {
        temp = [...comments];
    }
    temp.push(
        { mapValue : 
            { fields : 
                {
                    user: { stringValue : email },
                    comment: { stringValue : comment }
                }
            }
        }
    )

    console.log(temp);
    fetch(`https://firestore.googleapis.com/v1/${post.name}?updateMask.fieldPaths=comments`, {
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
    });
    setComments(temp);
}