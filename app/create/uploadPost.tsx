export interface PropsType {
    title:string,
    content:string,
    idToken: string,
    selectedPoint: string,
}

export async function UploadPost(props:PropsType) {
    let {title, content, idToken, selectedPoint} = props;
    const email = localStorage.getItem('ddym-email');
    const data = {
        fields: {
            title: { stringValue: title },
            content: { stringValue: content },
            photo: { arrayValue: { values: [ ] }},
            time: { stringValue: new Date().toISOString() },
            point: { stringValue: selectedPoint },
            comments: { arrayValue: { values: [ ] }},
            likes: { arrayValue: { values: [ ] }},
            user: { stringValue: email },
            createTime: { doubleValue: + new Date() }
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
    .catch((err) => console.log("upload post err : ", err));
    return response;
}