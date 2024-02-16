import { firebaseConfig } from "@/firestore/config";
import { initializeApp } from "firebase/app";
import { getAuth, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { Dispatch } from "react";

export const updateProfilePic = (file:any, idToken:string, email:string) => {
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
        if(user && user.email) {
            initializeApp(firebaseConfig);
            const storage = getStorage();
            let storageRef = ref(storage, user.email);
            uploadBytes(storageRef, file)
            .then((snapshot) => {
                const fullPath = snapshot.metadata.fullPath
                getDownloadURL(ref(storage, fullPath))
                .then((res) => {
                    updateProfile(user, {
                        photoURL: res
                    }).then(() => {
                        console.log("profile pic changed");
                    }).catch((err) => {
                        console.log(err);
                    })
                    fetch(`https://firestore.googleapis.com/v1/projects/daedongyourmap-ad63d/databases/(default)/documents/users/${email}?updateMask.fieldPaths=photoURL`, {
                        method: 'PATCH',
                        headers: {
                            "Authorization": `Bearer ${idToken}`
                        },
                        body: JSON.stringify({
                            fields: {
                                photoURL: {
                                    stringValue: res
                                }
                            }
                        })
                    })
                })
            })
        }
    })
}