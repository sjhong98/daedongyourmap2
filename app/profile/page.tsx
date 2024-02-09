'use client';

import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import profilePic from '@/public/defaultProfilePic.jpeg';
import { profileStore } from "../recoilContextProvider";
import Image from "next/image";
import { updateProfilePic } from "./updateProfile/updateProfilePic";

export default function Profile() {
    const [image, setImage] = useState<any>();
    const profile = useRecoilValue(profileStore);

    const handleImageAdd = (e:any) => {
        updateProfilePic(e.target.files[0], setImage)
    }

    useEffect(() => {
        console.log(profile);
        if(profile.photoURL) setImage(profile.photoURL)
        else setImage(profilePic);
    }, [profile])

    return (
        <div className="w-full h-full center">
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
                    width={300} 
                    height={300} 
                    className="rounded-full cursor-pointer aspect-square object-cover" 
                />
            </label>
        </div>
    )
}

