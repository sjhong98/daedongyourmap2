'use client';

import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface propsType {
    setState: Dispatch<SetStateAction<string>>
    state: string,
    ph: string,
    type?: string
}

export default function Input(props:propsType) {

    return (
        <InputComponent 
            placeholder={props.ph} 
            onChange={(e)=>props.setState(e.target.value)} 
            value={props.state}
            type={props.type ? props.type : "text"}
        />
    )
}

const InputComponent = styled.input`
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: #003545;
    }
    color:#003545;
    border-bottom: solid 2.5px #003545;

`