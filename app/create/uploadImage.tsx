'use client';

import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { firebaseConfig } from '../../firestore/config';

export function UploadImage(file:any, idToken:string, documentId:string, selectedPoint:string, routerToMain:(point:string)=>void) {
    initializeApp(firebaseConfig);
    const storage = getStorage();
    let fullPath:string;
    let storageRef;
    let temp:any[] = [];

    file.map((item:any, index:number) => {
        let imageId = `${documentId}-${index}`;
        storageRef = ref(storage, imageId);
        uploadBytes(storageRef, item)
        .then((snapshot) => {
            fullPath = snapshot.metadata.fullPath
            getDownloadURL(ref(storage, fullPath))
            .then((res) => {
                temp.push({ stringValue: res });
                let data = { fields: { photo: { arrayValue: { values: temp } } } }
                patchURL(fullPath, idToken, selectedPoint, routerToMain, data);
            })
        })
    })
        
}

const patchURL = (fullPath:string, idToken:string, selectedPoint:string, routerToMain:(point:string)=>void, data:any) => {
    // DownloadURL을 fireStore에 저장
    let url = fullPath.slice(0, -2);
    fetch(`https://firestore.googleapis.com/v1/${url}?updateMask.fieldPaths=photo`, {
        method: 'PATCH',
        headers: {
            "Authorization": `Bearer ${idToken}`
        },
        body: JSON.stringify(data)
    })
    .then(() => {
        routerToMain(selectedPoint);
    })
    .catch((err)=>
        console.log(err)
    );
}