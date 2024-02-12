export const getProfile = async (email:string) => {
    console.log("looking for ", email, "...");
    const profile = await fetch(`https://firestore.googleapis.com/v1/projects/daedongyourmap-ad63d/databases/(default)/documents/users/${email}`, {
        method: 'GET',
    });
    const data = await profile.json();
    let extract 
    if(data.field !== undefined) {
        extract = {
            displayName: data.fields.displayName.stringValue,
            photoURL: data.fields.photoURL.stringValue,
            follower: data.fields.follewer.arrayValue.values,
            follow: data.fields.follow.arrayValue.values
        }
    }
    return extract;
}