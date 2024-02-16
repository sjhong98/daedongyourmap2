'use client';

import Image from "next/image";
import profilePic from '@/public/defaultProfilePic.jpeg';
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { updateProfilePic } from "./updateProfilePic";
import { idTokenStore, profileStore } from "@/app/recoilContextProvider";

export default function ProfilePic() {
    const [image, setImage] = useState<any>();
    const profile = useRecoilValue(profileStore);
    const idToken = useRecoilValue(idTokenStore);

    const handleImageAdd = (e:any) => {
        let email = localStorage.getItem('ddym-email');
        if(email) {
            setImage(URL.createObjectURL(e.target.files[0]));
            updateProfilePic(e.target.files[0], idToken, email);
        }
    }

    useEffect(() => {
        if(profile.photoURL) setImage(profile.photoURL)
        else setImage(profilePic);
    }, [profile])

    return (
        <div>
        <input
                id="input-image"
                type='file'
                onChange={handleImageAdd}
                accept='.png, .jpg, .jpeg, .HEIC, image/*'
                className="hidden"
            />
            <label 
                htmlFor="input-image" 
            >
                <Image 
                    alt="profile"
                    src={image} 
                    width={200} 
                    height={200} 
                    className="rounded-full cursor-pointer aspect-square object-cover" 
                />
            </label>
        </div>
    )
}