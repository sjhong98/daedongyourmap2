export const UpdateFollower = (
        idToken:string, 
        idToFollow:string, 
        updateData:Array<{stringValue: string}>,
    ) => {
    return new Promise((resolve) => {
        fetch(`https://firestore.googleapis.com/v1/projects/daedongyourmap-ad63d/databases/(default)/documents/users/${idToFollow}?updateMask.fieldPaths=follower`, {
            method: 'PATCH',
            headers: {
                "Authorization": `Bearer ${idToken}`
            },
            body: JSON.stringify({
                fields: {
                    follower: {
                        arrayValue: {
                            values: updateData 
                        }
                    }
                }
            })
        })
        .then((res) => {
            resolve(res);
        })
    })
}