import React from "react"
import {useSetRecoilState, useRecoilValue} from 'recoil';
import { typeState, themeState } from '../atoms'
import * as Mui from '@material-ui/core';





export default function Typefilters(props) {
    const setTypes = useSetRecoilState(typeState);
    const theme = useRecoilValue(themeState)
    
    return (
        <Mui.FormControlLabel value={props.type} control={<Mui.Radio color="primary" id={theme} onClick={() => setTypes(props.type)}/>} label={props.type} />
        
    )
    
}

