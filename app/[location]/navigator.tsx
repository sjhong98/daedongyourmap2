'use client';

import Map from "../components/map/map";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { swtichName } from "../functions/switchName";
import { selectedPointStore } from "../recoilContextProvider";
import { usePathname } from "next/navigation";

export default function Naviagator() {
    const pathname = usePathname();
    const selectedPoint = useRecoilValue(selectedPointStore);
    const [displayPoint, setDisplayPoint] = useState("");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [openAnim, setOpenAnim] = useState("");

    const containerStyle = "fixed flex ml-[-60vw] w-[40vw] z-[999]";

    useEffect(() => {
        // 영어 지역명 -> 한글 지역명
        let switchedPoint = swtichName(selectedPoint);
        if(switchedPoint !== undefined)
            setDisplayPoint(switchedPoint);
    }, [selectedPoint])

    const handleClickOpen = () => {
        if(!isOpen) {
            setOpenAnim("navigator-open z-[999]");
            setIsOpen(true);
        }
        else {
            setOpenAnim("navigator-close z-[0]");
            setIsOpen(false);
        }
    }

    return (
        <div className={pathname === "/" ? containerStyle : `${containerStyle} mt-[15vh]`}>
            <div className={`flex flex-col scale-[0.9] opacity-0 ${openAnim}`}>
                <Map isProfile={true} />
                <p className="text-white">
                    {displayPoint}
                </p>
            </div>
            <div className="flex-1" />
            <div className="mt-52 cursor-pointer z-[1000]" onClick={handleClickOpen} >
                { isOpen ?
                    <ArrowBackIosNewIcon />
                    :
                    <ArrowForwardIosIcon />
                }
            </div>
        </div>
    )
}