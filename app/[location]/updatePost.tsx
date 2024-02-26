export const updatePost = async (postId:string) => {
    const res = await fetch(`https://firestore.googleapis.com/v1/projects/daedongyourmap-ad63d/databases/(default)/documents/posts/${postId}`, {
        method: 'GET'
    })
    const data = await res.json();

    let extract: any[] = [];
    let curComments:any;
    let tags: any;
    if(data) {
        if(data.fields.comments.arrayValue.values === undefined) curComments = [];
        else curComments = data.fields.comments.arrayValue.values;
        if(data.fields.tags === undefined || data.fields.tags.arrayValue.values === undefined) tags = [];
        else tags = data.fields.tags.arrayValue.values;
        data !== undefined && extract.push({
            createTime: data.fields.createTime.doubleValue,
            title: data.fields.title.stringValue,
            content: data.fields.content.stringValue,
            point: data.fields.point.stringValue,
            photo: data.fields.photo.arrayValue.values,
            user: data.fields.user.stringValue,
            comments: curComments,
            name: data.name,
            likes: data.fields.likes.arrayValue.values,
            tags: tags
        });
    }
    console.log("updated post : ", postId);
    return extract;
}