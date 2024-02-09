'use client';

import Image from "next/image";
import ProfilePic from "./profilePic/profilePic";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { ProfileType, profileStore } from "../recoilContextProvider";
import { useRouter } from "next/navigation";

export default function Profile() {
    const router = useRouter();
    const profile = useRecoilValue<ProfileType>(profileStore);
    const [displayName, setDisplayName] = useState<string>("");
    const email = localStorage.getItem('ddym-email');

    useEffect(() => {
        if(profile.displayName) setDisplayName(profile.displayName);
        else if(email) setDisplayName(email);
    }, [profile])

    const handleClickSetting = () => {
        router.push('/setting/edit');
    }

    return (
        <div className="flex w-screen h-full">
            <div className="w-1/3 h-full center">
                <ProfilePic />
                <p className="text-white nnn text-[1.5rem]">{displayName}</p>
                <p className="text-white cursor-pointer" onClick={handleClickSetting}>setting</p>
            </div>
            <div className="w-2/3 h-full center">
                hlelo
            </div>
        </div>
    )
}

