export async function deletePost(id:string) {
    const res = await fetch(`https://firestore.googleapis.com/v1/projects/daedongyourmap-ad63d/databases/(default)/documents/posts/${id}`, {
        method: 'DELETE'
    })
    res.json()
    .then(() => {
        console.log("게시물 삭제 완료")
    })
    .catch((err) => 
        console.log("게시물 삭제 에러", err)
    )
}