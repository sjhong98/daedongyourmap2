export const fetchPost = async () => {
    const res = await fetch('https://firestore.googleapis.com/v1/projects/daedongyourmap-ad63d/databases/(default)/documents/posts', {
        method: 'GET',
        cache: 'no-cache'
    })
    .then((res) => res.json())
    const data = res.documents;
    const extract = data.map((item:any) => {
        return {
            createTime: item.createTime,
            title: item.fields.title.stringValue,
            content: item.fields.content.stringValue,
            point: item.fields.point.stringValue,
            photo: item.fields.photo.arrayValue.values,
            user: item.fields.user.stringValue,
            comments: item.fields.comments.arrayValue.values,
            name: item.name,
            likes: item.fields.likes.arrayValue.values,
        }
    })
    return extract;
}
