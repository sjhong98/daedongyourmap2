import { Dispatch } from "react";
import { PostType } from "@/app/recoilContextProvider";

export async function removeLike(post:PostType, idToken:string, likes:any, setLikes:Dispatch<any>) {
    let curEmail:string;
    if(typeof window !== 'undefined' && localStorage !== null)
        localStorage.getItem('ddym-email');
    let temp:any[] = [];
    if(likes.length !== 0) {
        temp = [...likes];
    }
    let index = temp.findIndex((item) => item.stringValue === curEmail)
    temp.splice(index, 1);
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