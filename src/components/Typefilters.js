import React from "react"
import {useSetRecoilState, useRecoilValue} from 'recoil';
import { typeState, themeState, counterState } from '../atoms'
import * as Mui from '@material-ui/core';





export default function Typefilters(props) {
    const setTypes = useSetRecoilState(typeState);
    const theme = useRecoilValue(themeState)
    const setCounter = useSetRecoilState(counterState)    
    const handleClick = () => {
        setTypes(props.type)
        setCounter(8)
    }

    return (
        <Mui.FormControlLabel value={props.type} control={<Mui.Radio color="primary" id={theme} onClick={() => handleClick()}/>} label={props.type} />
        
    )
    
}

