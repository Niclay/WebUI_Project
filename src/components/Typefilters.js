import React from "react"
import {useRecoilState} from 'recoil';
import { typeState } from '../atoms'
import * as Mui from '@material-ui/core';




export default function Typefilters(props) {
    const [type, setTypes] = useRecoilState(typeState);
    
    return (
        <Mui.FormControlLabel value={props.type} control={<Mui.Radio color="primary" onClick={() => setTypes(props.type)}/>} label={props.type} />
        
    )
    
}

