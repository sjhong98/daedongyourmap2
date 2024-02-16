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
    const uploadFilesSequentially = async () => {
        for (let index = 0; index < file.length; index++) {
            let item = file[index];
            let imageId = `${documentId}-${index}`;
            storageRef = ref(storage, imageId);
    
            try {
                const snapshot = await uploadBytes(storageRef, item);
                const fullPath = snapshot.metadata.fullPath;
    
                // storage에 업로드된 URL 받기
                const res = await getDownloadURL(ref(storage, fullPath));
    
                temp.push({ stringValue: res });
                let data = { fields: { photo: { arrayValue: { values: temp } } } }
                let url = fullPath.slice(0, -2);
    
                // storage URL -> DB에 저장
                await fetch(`https://firestore.googleapis.com/v1/${url}?updateMask.fieldPaths=photo`, {
                    method: 'PATCH',
                    headers: {
                        "Authorization": `Bearer ${idToken}`
                    },
                    body: JSON.stringify(data)
                });
    
                // 현재 파일 업로드가 완료된 후에 다음 파일로 이동
            } catch (error) {
                console.log(error);
                // 에러 처리 로직 추가
            }
        }
    
        setPostCreated(true);
        routerToMain(selectedPoint);
    };
    
    uploadFilesSequentially();
}