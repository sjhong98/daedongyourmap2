'use client';

import { PostType } from "@/app/recoilContextProvider";
import { firebaseConfig } from "@/firestore/config";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export async function UploadComment(post:PostType, idToken:string, comment:string) {
    initializeApp(firebaseConfig);
    const auth = getAuth();
    let temp = [];
    if(post.comments !== undefined) {
        for(let i=0; i<post.comments.length; i++) {
            temp.push({ mapValue : 
                        { fields : {
                            user: { stringValue : post.comments[i].mapValue.fields.user.stringValue },
                            comment: { stringValue : post.comments[i].mapValue.fields.comment.stringValue }
                        }
                    }
                }
            )
        }
    }
    temp.push({ mapValue : 
        { fields : 
            {
                user: { stringValue : auth.currentUser && auth.currentUser.email },
                comment: { stringValue : comment }
            }
        }
    })
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
    }).catch((err) => console.log(err));
}