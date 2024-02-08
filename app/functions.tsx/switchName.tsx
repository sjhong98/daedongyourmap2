import { Dispatch, SetStateAction } from "react";

export const swtichName = (name:string) => {
    let after:string;
    switch(name) {
        case 'gyeonggi' : after = '경기'; return after;
        case 'incheon' : after = '인천'; return after;
        case 'seoul' : after = '서울'; return after;
        case 'kyungnam' : after = '경상남도'; return after;
        case 'kyungbuk' : after = '경상북도'; return after;
        case 'jeonnam' : after = '전라남도'; return after;
        case 'jeonbuk' : after = '전라북도'; return after;
        case 'busan' : after = '부산'; return after;
        case 'ulsan' : after = '울산'; return after;
        case 'daedu' : after = '대구'; return after;
        case 'chungbuk' : after = '충청북도'; return after;
        case 'chungnam' : after = '충청남도'; return after;
        case 'gangwon' : after = '강원'; return after;
        case 'gwangju' : after = '광주'; return after;
        case 'daejeon' : after = '대전'; return after;
        case 'jeju' : after = '제주'; return after;
    }
}