"use client";

import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Image, { StaticImageData } from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { isPostBoardStore, selectedPointStore } from '@/app/recoilContextProvider';

interface MapImagePropsType {
    src: StaticImageData;
    alt: string;
    width: number;
    position: string;
    count: number;
}

export default function MapImage(props:MapImagePropsType) {
    const router = useRouter();
    const pathName = usePathname();
    const splittedPath = pathName.split('/');
    const isPostBoard = useRecoilValue(isPostBoardStore);
    const set = useSetRecoilState(selectedPointStore);
    const { src, alt, width, position, count } = props;
    const [invertLevel, setInvertLevel] = useState<string>("");

    useEffect(() => {
        if(count < 2) setInvertLevel("invert-0")
        else if(count < 5) setInvertLevel("invert-[2%]")
        else if(count < 7) setInvertLevel("invert-[4%]")
        else if(count < 10) setInvertLevel("invert-[6%]")
        else if(count < 13) setInvertLevel("invert-[8%]")
        else if(count < 17) setInvertLevel("invert-[10%]")
        else if(count < 20) setInvertLevel("invert-[12%]")
        else if(count < 23) setInvertLevel("invert-[14%]")
        else if(count < 26) setInvertLevel("invert-[16%]")
        else if(count < 30) setInvertLevel("invert-[18%]")
        else setInvertLevel("invert-[20%]")
    }, [])

    const handleClick = (e:any) => {
        if(pathName === "/" && splittedPath[0] !== "profile") router.push(`/${e.target.alt}`);
        else router.push(`/${splittedPath[1]}/${splittedPath[2]}/${e.target.alt}`);
    }

    const handleMouseOver = (e:any) => {
        set(e.target.alt);
    }

    const handleMouseOut = () => {
        set("");
    }

    return <Image 
                src={src} 
                alt={alt} 
                width={width} 
                className={`${position} ${invertLevel}`} 
                onClick={handleClick}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            />
}