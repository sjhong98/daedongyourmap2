'use client';

import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import ProfilePic from "@/app/profile/profilePic/profilePic";
import { ProfileType, profileStore } from "@/app/recoilContextProvider";
import Input from "@/app/modules/input";
import { getAuth, updateProfile } from "firebase/auth";

export default function Edit() {
    const profile = useRecoilValue<ProfileType>(profileStore);
    const [displayName, setDisplayName] = useState<string>("");
    const [activeBtn, setActiveBtn] = useState<boolean>(true);

    useEffect(() => {
        if(profile.displayName) setDisplayName(profile.displayName);
    }, [profile])

    useEffect(() => {
        if(profile.displayName === displayName || displayName === "") setActiveBtn(false);
        else setActiveBtn(true);
    }, [displayName])

    const handleClickChange = () => {
        const auth = getAuth();
        auth.onAuthStateChanged((user) => {
            if(user) {
                updateProfile(user, {
                    displayName: displayName
                }).then(() => {
                    console.log("display name changed");
                    alert("이름이 변경되었습니다.")
                }).catch((err) => {
                    console.log(err);
                })
            }
        })
    }

    return (
        <div className="p-12">
            <p className="text-white text-[2rem]">프로필 수정</p>
            <div className="bg-stone-900 w-[90%] h-[30vh] rounded-2xl center flex-col mt-3">
                <ProfilePic />
                <label 
                    htmlFor="input-image" 
                    className="rounded-md h-[3vh] bg-stone-300 text-black cursor-pointer nnn center mt-4 p-1" 
                >
                    사진 변경
                </label>
            </div>
            <div className="bg-stone-900 w-[90%] h-[10vh] rounded-2xl center mt-3">
                <input 
                    onChange={(e)=>setDisplayName(e.target.value)} 
                    value={displayName} 
                    className="bg-stone-800 rounded-2xl mr-2 nnn focus:outline-none px-4" 
                />
                { activeBtn ? 
                    <button
                    onClick={handleClickChange}
                    className="bg-stone-300 rounded-md nnn text-black p-1"
                    >
                        변경
                    </button>
                    :
                    <></>
                }
            </div>
    </div>
    )
}