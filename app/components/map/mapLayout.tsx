'use client';

import { useEffect, useState } from "react";
import Map from "./map";
import { useRecoilValue } from "recoil";
import { selectedPointStore } from "@/app/recoilContextProvider";
import { swtichName } from "@/app/functions.tsx/switchName";

export default function MapLayout() {
    const selectedPoint = useRecoilValue(selectedPointStore);
    const [displayName, setDisplayName] = useState<string | undefined>(" ");

    useEffect(() => {
        setDisplayName(swtichName(selectedPoint));
    }, [selectedPoint])

    return (
        <div className='flex'>
            <div className="mr-[10vw] ml-[-10vw] mt-[20vh] w-[10vw]">
                <pre className="nnn text-[3rem] text-white">{displayName}</pre>
            </div>
            <Map /> 
        </div>
    )
}