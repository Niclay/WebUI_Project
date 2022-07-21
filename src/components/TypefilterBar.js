import React from "react"
import { useRecoilValue, useSetRecoilState, } from 'recoil';

import Typefilters from "./Typefilters"
import { typeState, dataState, themeState, counterState } from '../atoms'

import * as Mui from '@material-ui/core';

export default () =>{

    const setTypes = useSetRecoilState(typeState);
    const data = useRecoilValue(dataState);
    const setCounter = useSetRecoilState(counterState);
    const theme = useRecoilValue(themeState);

    const typeSet = new Set()

    for (let i = 0; i < data.length; i++) {
        if (data[i].hasOwnProperty("type")) {
            typeSet.add(data[i].type[0])
        }
    }

    const typefilter = [...typeSet].map(item => <Typefilters key ={item} type={item} />)
   
    const handleClick = () => {
        setTypes("All")
        setCounter(8)
    }

    return (
        <div className="filterwrap">
            <Mui.FormControl>
                <Mui.FormLabel 
                    id="demo-radio-buttons-group-label">Publication Types
                </Mui.FormLabel>
                <br/>
                <Mui.RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="reset"
                    name="radio-buttons-group"
                >
                <Mui.FormControlLabel value="reset" control={<Mui.Radio color="primary" id={theme} onClick={handleClick}/>} label="Show all publication types" />
                    {typefilter}
                </Mui.RadioGroup>
            </Mui.FormControl>
        </div>
    )
}
