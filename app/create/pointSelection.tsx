'use client';

import MenuItem from '@mui/material/MenuItem';
import { useEffect } from 'react';
import { useRecoilState } from "recoil";
import { selectedPointStore } from "../recoilContextProvider";
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function PointSelection( props: { curSelectedPoint?: string } ) {
    const [selectedPoint, setSelectedPoint] = useRecoilState(selectedPointStore);

    useEffect(() => {
        if(props.curSelectedPoint)
            setSelectedPoint(props.curSelectedPoint);
    }, [])

    const handleSelectChange = (e:SelectChangeEvent) => {
        setSelectedPoint(e.target.value as string);
    }

    return (
        <Select 
            value={selectedPoint}
            label="지역"
            onChange={handleSelectChange}
            className="w-full"
            sx={{backgroundColor:'white', height: '3vh', marginBottom:'2vh'}}
        >
            <MenuItem value="seoul">서울</MenuItem>
            <MenuItem value="incheon">인천</MenuItem>
            <MenuItem value="gangwon">강원</MenuItem>
            <MenuItem value="jeju">제주</MenuItem>
            <MenuItem value="gyeonggi">경기</MenuItem>
            <MenuItem value="busan">부산</MenuItem>
            <MenuItem value="daegu">대구</MenuItem>
            <MenuItem value="kyungnam">경상남도</MenuItem>
            <MenuItem value="kyungbuk">경상북도</MenuItem>
            <MenuItem value="jeonnam">전라남도</MenuItem>
            <MenuItem value="jeonbuk">전라북도</MenuItem>
            <MenuItem value="chungnam">충청남도</MenuItem>
            <MenuItem value="chungbuk">충청북도</MenuItem>
            <MenuItem value="daejeon">대전</MenuItem>
            <MenuItem value="gwangju">광주</MenuItem>
            <MenuItem value="ulsan">울산</MenuItem>
        </Select>
    )
}