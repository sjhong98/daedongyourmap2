export const getProfile = async (email:string) => {
    console.log("looking for", email, "'s data");
    const profile = await fetch(`https://firestore.googleapis.com/v1/projects/daedongyourmap-ad63d/databases/(default)/documents/users/${email}`, {
        method: 'GET',
    });
    const data = await profile.json();
    let extract;
    if(data.fields !== undefined) {
        console.log(data);       
        extract = {
            displayName: data.fields.displayName.stringValue,
            photoURL: data.fields.photoURL.stringValue,
            follower: data.fields.follower.arrayValue,
            follow: data.fields.follow.arrayValue
        }
    }
    return extract;
}