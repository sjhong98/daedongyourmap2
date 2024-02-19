export const DeleteComment = (postId:string, index:number, comments:any, idToken:string) => {
    return new Promise((resolve) => {
        let temp = [...comments];
        console.log(index, comments);
        temp.splice(index, 1);
        fetch(`https://firestore.googleapis.com/v1/${postId}?updateMask.fieldPaths=comments`, {
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
        .then((res) => {
            resolve(res);
        })
        .catch((err) => {
            console.log(err);
        })
    })
    
}