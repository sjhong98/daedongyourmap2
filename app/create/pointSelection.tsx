'use client';

import { Dispatch, SetStateAction } from "react";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useRecoilState } from "recoil";
import { selectedPointStore } from "../recoilContextProvider";

interface propsType {
    selectedPoint: string,
    setSelectedPoint: Dispatch<SetStateAction<string>>
}

export default function PointSelection() {
    const [selectedPoint, setSelectedPoint] = useRecoilState(selectedPointStore);

    const handleSelectChange = (e:SelectChangeEvent) => {
        setSelectedPoint(e.target.value as string);
    }

    return (
        <Select 
            value={selectedPoint}
            label="지역"
            onChange={handleSelectChange}
            className="w-[20vw]"
            sx={{backgroundColor:'white', height: '3vh', marginBottom:'2vh'}}
        >
            <MenuItem value="su">서울</MenuItem>
            <MenuItem value="ic">인천</MenuItem>
            <MenuItem value="gw">강원</MenuItem>
            <MenuItem value="jj">제주</MenuItem>
            <MenuItem value="gg">경기</MenuItem>
            <MenuItem value="bs">부산</MenuItem>
            <MenuItem value="dg">대구</MenuItem>
            <MenuItem value="kn">경상남도</MenuItem>
            <MenuItem value="kb">경상북도</MenuItem>
            <MenuItem value="jn">전라남도</MenuItem>
            <MenuItem value="jb">전라북도</MenuItem>
            <MenuItem value="cn">충청남도</MenuItem>
            <MenuItem value="cb">충청북도</MenuItem>
            <MenuItem value="dj">대전</MenuItem>
            <MenuItem value="gj">광주</MenuItem>
            <MenuItem value="us">울산</MenuItem>
        </Select>
    )
}