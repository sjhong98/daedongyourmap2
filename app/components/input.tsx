'use client';

import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface propsType {
    setState: Dispatch<SetStateAction<string>>
    state: string,
    placeholder: string,
    type?: string
}

export default function Input(props:propsType) {

    return (
        <InputComponent 
            placeholder={props.placeholder} 
            onChange={(e)=>props.setState(e.target.value)} 
            value={props.state}
            type={props.type ? props.type : "text"}
            className='border-b-2 mc mb-4'
        />
    )
}

const InputComponent = styled.input`
    &:focus {
        outline: none;
        border-bottom: solid 2.5px #003545;
    }
    &::placeholder {
        color: #003545;
    }
`