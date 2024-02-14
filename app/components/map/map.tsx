'use client';

import su from '@/public/map/su.png'; 
import ic from '@/public/map/ic.png'; 
import ic2 from '@/public/map/ic2.png'; 
import gg from '@/public/map/gg.png'; 
import gw from '@/public/map/gw.png'; 
import cn from '@/public/map/cn.png'; 
import cb from '@/public/map/cb.png'; 
import dj from '@/public/map/dj.png'; 
import kn from '@/public/map/kn.png'; 
import kb from '@/public/map/kb.png'; 
import dg from '@/public/map/dg.png'; 
import us from '@/public/map/us.png'; 
import bs from '@/public/map/bs.png'; 
import jj from '@/public/map/jj.png'; 
import gj from '@/public/map/gj.png'; 
import jn from '@/public/map/jn.png'; 
import jb from '@/public/map/jb.png'; 
import bg from '@/public/map/bg.png';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';
import Image, { StaticImageData } from 'next/image';
import { selectedPointStore } from '@/app/recoilContextProvider';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface propsType{
    setState?: Dispatch<SetStateAction<string>>
}

// ssr로 히트맵 정보 받기
export default function Map() {
    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);
    let pivotX:number, pivotY:number;
    // const [selectedIndex, setSelectedIndex] = useState("");

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
        <MovingMap x={cursorX*0.1} y={cursorY*0.2} onMouseOver={handleOver} className='flex justify-center items-center w-[300px] h-[200px]'>
            <Image src={bg} alt='bg' className=' absolute mt-[450px] ml-[300px] rotate-[-2deg] z-[1] scale-[4.5]' />
            <MapImage src={ic} alt="incheon" width={22} position='map-elem mb-[40px] mr-[160px] z-[100]' />
            <MapImage src={ic2} alt="incheon" width={24} position='map-elem mb-[-32px] ml-[-150px] z-[100]' />
            <MapImage src={gg} alt="gyeonggi" width={160} position='map-elem ml-[-31px] z-[80]' />
            <MapImage src={su} alt="seoul" width={48} position='map-elem ml-[-128px] mb-[-10px] z-[100]' />
            <MapImage src={gw} alt="gangwon" width={270} position='map-elem mb-[69px] ml-[-8px] z-[80]' />
            <MapImage src={cn} alt="chungnam" width={170} position='map-elem mt-[315px] ml-[-375px] rotate-[-10deg] z-[100]' />
            <MapImage src={dj} alt="daejeon" width={35} position='map-elem ml-[-40px] mb-[-340px] rotate-[6deg] z-[100]' />
            <MapImage src={cb} alt="chungnam" width={162} position='map-elem ml-[-32px] mb-[-253px] rotate-[-19deg] z-[80]' />
            <MapImage src={kb} alt="kyungbuk" width={209} position='map-elem mt-[330px] ml-[-105px] rotate-[-2deg] z-[90]' />
            <MapImage src={dg} alt="daegu" width={70} position='map-elem mt-[490px] ml-[-155px] rotate-[-47deg] z-[100]' />
            <MapImage src={jb} alt="jeonbuk" width={162} position='map-elem mb-[-500px] ml-[-275px] z-[80]' />
            <MapImage src={jn} alt="jeonnam" width={188} position='map-elem ml-[-200px] mb-[-724px] z-[80]' />
            <MapImage src={gj} alt="gwangju" width={40} position='map-elem mb-[-650px] ml-[-126px] z-[100]' />
            <MapImage src={kn} alt="kyungnam" width={178} position='map-elem mb-[-610px] ml-[62px] z-[80]' />
            <MapImage src={us} alt="ulsan" width={58} position='map-elem mt-[550px] ml-[-22px] rotate-[25deg] z-[100]' /> 
            <MapImage src={bs} alt="busan" width={60} position='map-elem mt-[630px] ml-[-80px] rotate-[-30deg] z-[110]' />
            <MapImage src={jj} alt="jeju" width={100} position='map-elem mt-[980px] ml-[-370px] z-[80]' />
        </MovingMap>
    )
}

interface MapImagePropsType {
    src: StaticImageData;
    alt: string;
    width: number;
    position: string;
}

function MapImage(props:MapImagePropsType) {
    const router = useRouter();
    const { src, alt, width, position } = props;
    const set = useSetRecoilState(selectedPointStore);

    const handleClick = (e:any) => {
        router.push(`/${e.target.alt}`);
    }

    const handleMouseOver = (e:any) => {
        set(e.target.alt);
    }

    const handleMouseOut = (e:any) => {
        set("");
    }

    return <Image 
            src={src} 
            alt={alt} 
            width={width} 
            className={position} 
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            />
}

const MovingMap = styled.div<{x:number, y:number}>`
    transform: translate(${(props) => props.x}px, ${(props) => props.y}px);
    scale: 1.4;
`