import React from "react"
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { typeState, themeState, counterState } from '../atoms'
import * as Mui from '@material-ui/core';


export default (props) => {
    //states
    const setTypes = useSetRecoilState(typeState);
    const theme = useRecoilValue(themeState)
    const setCounter = useSetRecoilState(counterState)

    //typestate auf typ des geklickten radiobuttons setzen, counter wieder auf 8 um 8 karten zu rendern
    const handleClick = () => {
        setTypes(props.type)
        setCounter(8)
    }

    //return Radiobutton für jeden Typ
    return (
        <Mui.FormControlLabel value={props.type} control={<Mui.Radio color="primary" id={theme} onClick={() => handleClick()} />} label={props.type} />
    )

}

