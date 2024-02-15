'use client';

import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { firebaseConfig } from '../../firestore/config';
import { SetterOrUpdater } from 'recoil';

export function UploadImage(
        file:any, 
        idToken:string, 
        documentId:string, 
        selectedPoint:string, 
        routerToMain:(point:string)=>void,
        setPostCreated:SetterOrUpdater<boolean>
    ) {
    initializeApp(firebaseConfig);
    const storage = getStorage();
    let fullPath:string;
    let storageRef;
    let temp:any[] = [];

    // storage에 file upload
    file.map((item:any, index:number) => {
        let imageId = `${documentId}-${index}`;
        storageRef = ref(storage, imageId);
        uploadBytes(storageRef, item)
        .then((snapshot) => {
            fullPath = snapshot.metadata.fullPath;

            // storage에 업로드된 URL 받기
            getDownloadURL(ref(storage, fullPath))
            .then((res) => {
                temp.push({ stringValue: res });
                let data = { fields: { photo: { arrayValue: { values: temp } } } }
                let url = fullPath.slice(0, -2);

                // storage URL -> DB에 저장
                fetch(`https://firestore.googleapis.com/v1/${url}?updateMask.fieldPaths=photo`, {
                    method: 'PATCH',
                    headers: {
                        "Authorization": `Bearer ${idToken}`
                    },
                    body: JSON.stringify(data)
                })
                .then(() => {
                    setPostCreated(true);
                    routerToMain(selectedPoint);
                })
                .catch((err)=>
                    console.log(err)
                );
            })
        })
    })
}