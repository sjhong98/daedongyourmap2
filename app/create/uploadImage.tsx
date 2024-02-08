'use client';

import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { firebaseConfig } from '../../firestore/config';

export function UploadImage(file:any, idToken:string, documentId:string, selectedPoint:string, routerToMain:(point:string)=>void) {
    initializeApp(firebaseConfig);
    let fullPath:string;
    const storage = getStorage();
    let storageRef;

    for(let i=0; i<file.length; i++) {
        let imageId = `${documentId}-${i}`;
        storageRef = ref(storage, imageId);
        uploadBytes(storageRef, file[i])
        .then((snapshot) => {
            fullPath = snapshot.metadata.fullPath
            getDownloadURL(ref(storage, fullPath))
            .then((res) => {
                let temp = [];
                for(let i=0; i<file.length; i++) {
                    temp.push({ stringValue: res });
                }
                let data = {fields: {photo: { arrayValue: { values: temp } } } }
                // DownloadURL을 fireStore에 저장
                let url = fullPath.slice(0, -2);
                fetch(`https://firestore.googleapis.com/v1/${url}?updateMask.fieldPaths=photo`, {
                    method: 'PATCH',
                    headers: {
                        "Authorization": `Bearer ${idToken}`
                    },
                    body: JSON.stringify(data)
                })
                .then((res) => {
                    routerToMain(selectedPoint);
                })
                .catch((err)=>
                    console.log(err)
                );
            })
        })
    }
}
