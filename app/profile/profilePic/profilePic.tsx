'use client';

import Image from "next/image";
import profilePic from '@/public/defaultProfilePic.jpeg';
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { updateProfilePic } from "./updateProfilePic";
import { profileStore } from "@/app/recoilContextProvider";

export default function ProfilePic() {
    const [image, setImage] = useState<any>();
    const profile = useRecoilValue(profileStore);

    const handleImageAdd = (e:any) => {
        updateProfilePic(e.target.files[0], setImage)
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