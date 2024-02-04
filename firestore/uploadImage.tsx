import { initializeApp } from 'firebase/app';
import { getDownloadURL, getMetadata, getStorage, ref, uploadBytes } from 'firebase/storage';
import { firebaseConfig } from './config';


export function UploadImage(file:any, idToken:string, documentId:string) {
    initializeApp(firebaseConfig);
    const storage = getStorage();
    console.log(documentId);
    const storageRef = ref(storage, documentId);
    uploadBytes(storageRef, file)
    .then((snapshot) => {
        console.log(snapshot);
        const fullPath = snapshot.metadata.fullPath;
        getDownloadURL(ref(storage, fullPath))
        .then((res) => {
            const data = {
                fields: {
                    photo: {
                        stringValue: res
                    },
                }
            }
            console.log("data : " , data);
            // DownloadURL을 fireStore에 저장
            fetch(`https://firestore.googleapis.com/v1/${fullPath}?updateMask.fieldPaths=photo`, {
                method: 'PATCH',
                headers: {
                    "Authorization": `Bearer ${idToken}`
                },
                body: JSON.stringify(data)
            })
        })

        
    })
}