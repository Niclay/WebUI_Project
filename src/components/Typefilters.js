import React from "react"

import { useSetRecoilState, useRecoilValue } from 'recoil';
import { typeState, themeState, counterState } from '../atoms'

import * as Mui from '@material-ui/core';


export default (props) => {
    //states
    const setTypes = useSetRecoilState(typeState);
    const theme = useRecoilValue(themeState)
    const setCounter = useSetRecoilState(counterState)

    //set Type = type + show 8 items
    const handleClick = () => {
        setTypes(props.type)
        setCounter(8)
    }

    //return Radiobutton
    return (
        <Mui.FormControlLabel value={props.type} control={<Mui.Radio color="primary" id={theme} onClick={() => handleClick()} />} label={props.type} />
    )

}

