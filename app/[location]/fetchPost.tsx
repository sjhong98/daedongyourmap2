export const fetchPost = async () => {
    const res = await fetch('https://firestore.googleapis.com/v1/projects/daedongyourmap-ad63d/databases/(default)/documents/posts', {
        method: 'GET',
        cache: 'no-cache'
    })
    .then((res) => res.json())
    const ext = res.documents;
    return ext;
}