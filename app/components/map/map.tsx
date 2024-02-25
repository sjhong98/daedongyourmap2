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
import MapImage from './mapImage';
import Image from 'next/image';

type CountType = {point: string, count: number}

export default function Map(props: {counts:CountType[]}) {
    // let counts = props.counts;
    let counts = [{point: "incheon", count: 0}, {point: "gyeonggi", count: 0}, {point: "seoul", count: 0}, {point: "gangwon", count: 0}, {point: "chungnam", count: 0}, {point: "daejeon", count: 0}, {point: "chungbuk", count: 0}, {point: "kyungbuk", count: 0}, {point: "daegu", count: 0}, {point: "jeonbuk", count: 0}, {point: "jeonnam", count: 0}, {point: "gwangju", count: 0}, {point: "kyungnam", count: 0}, {point: "ulsan", count: 0}, {point: "busan", count: 0}, {point: "jeju", count: 0}];

    return (
        <div className='flex justify-center items-center w-[300px] h-[200px]'>
            <Image src={bg} alt='bg' className=' absolute mt-[450px] ml-[300px] rotate-[-2deg] z-[1] scale-[4.5]' />
            <MapImage src={ic} count={counts[0].count} alt="incheon" width={22} position='map-elem mb-[40px] mr-[160px] z-[100]' />
            <MapImage src={ic2} count={counts[0].count} alt="incheon" width={24} position='map-elem mb-[-32px] ml-[-150px] z-[100]' />
            <MapImage src={gg} count={counts[1].count} alt="gyeonggi" width={160} position='map-elem ml-[-31px] z-[80]' />
            <MapImage src={su} count={counts[2].count} alt="seoul" width={48} position='map-elem ml-[-128px] mb-[-10px] z-[100]' />
            <MapImage src={gw} count={counts[3].count} alt="gangwon" width={270} position='map-elem mb-[69px] ml-[-8px] z-[80]' />
            <MapImage src={cn} count={counts[4].count} alt="chungnam" width={170} position='map-elem mt-[315px] ml-[-375px] rotate-[-10deg] z-[100]' />
            <MapImage src={dj} count={counts[5].count} alt="daejeon" width={35} position='map-elem ml-[-40px] mb-[-340px] rotate-[6deg] z-[100]' />
            <MapImage src={cb} count={counts[6].count} alt="chungbuk" width={162} position='map-elem ml-[-32px] mb-[-253px] rotate-[-19deg] z-[80]' />
            <MapImage src={kb} count={counts[7].count} alt="kyungbuk" width={209} position='map-elem mt-[330px] ml-[-105px] rotate-[-2deg] z-[90]' />
            <MapImage src={dg} count={counts[8].count} alt="daegu" width={70} position='map-elem mt-[490px] ml-[-155px] rotate-[-47deg] z-[100]' />
            <MapImage src={jb} count={counts[9].count} alt="jeonbuk" width={162} position='map-elem mb-[-500px] ml-[-275px] z-[80]' />
            <MapImage src={jn} count={counts[10].count} alt="jeonnam" width={188} position='map-elem ml-[-200px] mb-[-724px] z-[80]' />
            <MapImage src={gj} count={counts[11].count} alt="gwangju" width={40} position='map-elem mb-[-650px] ml-[-126px] z-[100]' />
            <MapImage src={kn} count={counts[12].count} alt="kyungnam" width={178} position='map-elem mb-[-610px] ml-[62px] z-[80]' />
            <MapImage src={us} count={counts[13].count} alt="ulsan" width={58} position='map-elem mt-[550px] ml-[-22px] rotate-[25deg] z-[100]' /> 
            <MapImage src={bs} count={counts[14].count} alt="busan" width={60} position='map-elem mt-[630px] ml-[-80px] rotate-[-30deg] z-[110]' />
            <MapImage src={jj} count={counts[15].count} alt="jeju" width={100} position='map-elem mt-[980px] ml-[-370px] z-[80]' />
        </div>
    )
}

