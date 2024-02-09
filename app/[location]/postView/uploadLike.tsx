import { Dispatch } from "react";
import { PostType } from "@/app/recoilContextProvider";

export async function uploadLike(post:PostType, idToken:string, likes:any, setLikes:Dispatch<any>) {
    const curEmail = localStorage.getItem('ddym-email');
    let temp:any[] = [];
    // 기존 데이터
    if(likes.length !== 0) {
        temp = [...likes];
    }
    // 좋아요 추가
    temp.push( { stringValue : curEmail })
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