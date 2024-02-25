"use client";

import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { searchKeyword } from './searchKeyword';

export default function SearchComponent() {
    const [keyword, setKeyword] = useState<string>("");

    const handleClickBtn = () => {
        searchKeyword(keyword);
    }

    return (
        <div className='flex'>
            <InputWrapper keyword={keyword} >
                <SearchIcon />
                <input 
                    value={keyword}
                    onChange={(e)=>setKeyword(e.target.value)}
                    className="bg-[#003545] nnl ml-2 w-[8vw] p-1 focus:outline-none focus:border-b-2"
                />
            </InputWrapper>
            { keyword === "" ?
                <></>
                :
                <Btn
                    onClick={handleClickBtn}
                    className='bg-white nnl mr-2 text-black rounded-md p-1'
                >
                    SEARCH
                </Btn>
            }

        </div>
    )
}

const InputWrapper = styled.div<{keyword: string}>`
    transition: transform 0.2s ease;
    transform: ${props => props.keyword === "" ? "translateX(0)" : "translateX(-2vw)" };
`

const Btn = styled.button`
    transition: 0.2s ease;
    &:active {
        background-color: #003545;
        color: white;
    }
`