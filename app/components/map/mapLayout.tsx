'use client';

import Map from "./map";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { swtichName } from "@/app/functions/switchName";
import { selectedPointStore } from "@/app/recoilContextProvider";

export default function MapLayout() {
    let pivotX:number, pivotY:number;
    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);
    const selectedPoint = useRecoilValue(selectedPointStore);
    const [displayName, setDisplayName] = useState<string | undefined>(" ");

    useEffect(() => {
        setDisplayName(swtichName(selectedPoint));
    }, [selectedPoint])

    const handleOver = () => {
        if(window !== undefined) {
            window.addEventListener('mousemove', onMouseMove);
        }
    }
    
    const onMouseMove = (event:any) => {
        if(window !== undefined) {
            pivotX = window.innerWidth / 2;
            pivotY = window.innerHeight / 2;
        }
        setCursorX(pivotX - event.clientX);
        setCursorY(pivotY - event.clientY);
    }

    return (
        <div className='flex'>
            <div className="mr-[10vw] ml-[-10vw] mt-[20vh] w-[10vw]">
                <pre className="nnn text-[3rem] text-white">{displayName}</pre>
            </div>
            <MovingMap x={cursorX*0.1} y={cursorY*0.2} onMouseOver={handleOver} className=' scale-[1.4]'>
                <Map /> 
            </MovingMap>
        </div>
    )
}

const MovingMap = styled.div<{x:number, y:number}>`
    transform: translate(${(props) => props.x}px, ${(props) => props.y}px);
    scale: 1.4;
`