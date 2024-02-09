import { Dispatch, SetStateAction } from "react";

export const swtichName = (name:string) => {
    let after:string;
    switch(name) {
        case 'gyeonggi' || 'gg' : after = '경기'; return after;
        case 'incheon' || 'ic' : after = '인천'; return after;
        case 'seoul' || 'su' : after = '서울'; return after;
        case 'kyungnam' || 'kn' : after = '경상남도'; return after;
        case 'kyungbuk' || 'kb' : after = '경상북도'; return after;
        case 'jeonnam' || 'jn' : after = '전라남도'; return after;
        case 'jeonbuk' || 'jb' : after = '전라북도'; return after;
        case 'busan' || 'bs' : after = '부산'; return after;
        case 'ulsan' || 'us' : after = '울산'; return after;
        case 'daegu' || 'dg' : after = '대구'; return after;
        case 'chungbuk' || 'cb' : after = '충청북도'; return after;
        case 'chungnam' || 'cn' : after = '충청남도'; return after;
        case 'gangwon' || 'gw' : after = '강원'; return after;
        case 'gwangju' || 'gj' : after = '광주'; return after;
        case 'daejeon' || 'dj' : after = '대전'; return after;
        case 'jeju' || 'jj' : after = '제주'; return after;
    }
}