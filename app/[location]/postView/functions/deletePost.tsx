import { deleteObject, getStorage, ref } from "firebase/storage"

export async function deletePost(id:string, addr:string, length:number) {
    return new Promise((resolve) => {
        fetch(`https://firestore.googleapis.com/v1/projects/daedongyourmap-ad63d/databases/(default)/documents/posts/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            const storage = getStorage();
            for(let i=0; i<length; i++) {
                deleteObject(ref(storage, `${addr}-${i}`))
                .then((res) => resolve(res))
                .catch((err) => console.log(err, "게시물 삭제 실패"));
            }
        })
        .catch((err) => 
            console.log("게시물 삭제 에러", err)
        )
    })

}