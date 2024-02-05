export interface PropsType {
    title:string,
    content:string,
    idToken: string
}

export async function UploadPost(props:PropsType) {
    let {title, content, idToken} = props;
    const data = {
        fields: {
            title: {
                stringValue: title
            },
            content: {
                stringValue: content
            },
            photo: {
                stringValue: ""
            },
            time: {
                stringValue: new Date().toISOString() // timestamp로 고칠 것
            }
        }
    }
    const res = await fetch('https://firestore.googleapis.com/v1/projects/daedongyourmap-ad63d/databases/(default)/documents/posts', {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${idToken}`,
        },
        body: JSON.stringify(data)
    })
    const response = res.json()
    response
    .then((res) => {return res.name})
    return response;
}