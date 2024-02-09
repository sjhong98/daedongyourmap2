import { firebaseConfig } from "@/firestore/config";
import { initializeApp } from "firebase/app";
import { getAuth, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { Dispatch } from "react";

export const updateProfilePic = (file:any, setImage:Dispatch<any>) => {
    setImage(URL.createObjectURL(file));
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
                })
            })
        }
    })
}