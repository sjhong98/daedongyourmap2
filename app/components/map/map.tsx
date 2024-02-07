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
import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

interface propsType{
    setState?: Dispatch<SetStateAction<string>>
}

// ssr로 히트맵 정보 받기
export default function Map(props:propsType) {
    const router = useRouter();
    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);
    const pivotX = window.innerWidth / 2;
    const pivotY = window.innerHeight / 2; 
    // const [selectedIndex, setSelectedIndex] = useState("");

    const handleClick = (e:any) => {
        router.push(`/${e.target.alt}`);
    }

    const handleOver = () => {
        if(window !== undefined) {
            window.addEventListener('mousemove', onMouseMove);
        }
    }
    
    const onMouseMove = (event:any) => {
        setCursorX(pivotX - event.clientX);
        setCursorY(pivotY - event.clientY);
    }

    return (
        <MovingMap x={cursorX*0.1} y={cursorY*0.2} onMouseOver={handleOver} className='flex justify-center items-center w-[300px] h-[200px]'>
            <Image src={bg} alt='bg' className=' absolute mt-[450px] ml-[300px] rotate-[-2deg] z-[1] scale-[4.5]' />
            <Image src={ic} alt="incheon" onClick={handleClick} width={22} className='map-elem mb-[40px] mr-[160px] z-[100]' />
            <Image src={ic2} alt="incheon" onClick={handleClick} width={24} className='map-elem mb-[-32px] ml-[-150px] z-[100]' />
            <Image src={gg} alt="gyeonggi" onClick={handleClick} width={160} className='map-elem ml-[-31px] z-[80]' />
            <Image src={su} alt="seoul" onClick={handleClick} width={48} className='map-elem ml-[-128px] mb-[-10px] z-[100]' />
            <Image src={gw} alt="gangwon" onClick={handleClick} width={270} className='map-elem mb-[69px] ml-[-8px] z-[80]' />
            <Image src={cn} alt="chungnam" onClick={handleClick} width={170} className='map-elem mt-[315px] ml-[-375px] rotate-[-10deg] z-[100]' />
            <Image src={dj} alt="daejeon" onClick={handleClick} width={35} className='map-elem ml-[-40px] mb-[-340px] rotate-[6deg] z-[100]' />
            <Image src={cb} alt="chungnam" onClick={handleClick} width={162} className='map-elem ml-[-32px] mb-[-253px] rotate-[-19deg] z-[80]' />
            <Image src={kb} alt="kyungbuk" onClick={handleClick} width={209} className='map-elem mt-[330px] ml-[-105px] rotate-[-2deg] z-[90]' />
            <Image src={dg} alt="daegu" onClick={handleClick} width={70} className='map-elem mt-[490px] ml-[-155px] rotate-[-47deg] z-[100]' />
            <Image src={jb} alt="jeonbuk" onClick={handleClick} width={162} className='map-elem mb-[-500px] ml-[-275px] z-[80]' />
            <Image src={jn} alt="jeonnam" onClick={handleClick} width={188} className='map-elem ml-[-200px] mb-[-724px] z-[80]' />
            <Image src={gj} alt="gwangju" onClick={handleClick} width={40} className='map-elem mb-[-650px] ml-[-126px] z-[100]' />
            <Image src={kn} alt="kyungnam" onClick={handleClick} width={178} className='map-elem mb-[-610px] ml-[62px] z-[80]' />
            <Image src={us} alt="ulsan" onClick={handleClick} width={58} className='map-elem mt-[550px] ml-[-22px] rotate-[25deg] z-[100]' /> 
            <Image src={bs} alt="busan" onClick={handleClick} width={60} className='map-elem mt-[630px] ml-[-80px] rotate-[-30deg] z-[110]' />
            <Image src={jj} alt="jeju" onClick={handleClick} width={100} className='map-elem mt-[980px] ml-[-370px] z-[80]' />
        </MovingMap>

    )
}

const MovingMap = styled.div<{x:number, y:number}>`
    transform: translate(${(props) => props.x}px, ${(props) => props.y}px);
    scale: 1.4;

`