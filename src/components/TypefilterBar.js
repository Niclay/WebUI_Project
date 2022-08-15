import React from "react"
import Typefilters from "./Typefilters"

import { useRecoilValue, useSetRecoilState, } from 'recoil';
import { typeState, dataState, themeState, counterState } from '../atoms'

import * as Mui from '@material-ui/core';

export default () => {

    //states
    const setTypes = useSetRecoilState(typeState);
    const data = useRecoilValue(dataState);
    const setCounter = useSetRecoilState(counterState);
    const theme = useRecoilValue(themeState);


    //create Set for publication types
    const typeSet = new Set()

    //if type exists -> add to Set
    for (let i = 0; i < data.length; i++) {
        if (data[i].hasOwnProperty("type")) {
            typeSet.add(data[i].type[0])
        }
    }

    //Typefilter for every type in Set
    const typefilter = [...typeSet].map(item => <Typefilters key={item} type={item} />)

    //set Types to all and show 8 items
    const handleClick = () => {
        setTypes("All")
        setCounter(8)
    }

    //return MUI Radiobuttons: 'Show all' + Dynamic types from typeSet–
    return (
        <div className="filter-wrap">
            <Mui.FormControl>
                <Mui.FormLabel
                    id="demo-radio-buttons-group-label">Publication Types
                </Mui.FormLabel>
                <br />
                <Mui.RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="reset"
                    name="radio-buttons-group"
                >
                    <Mui.FormControlLabel value="reset" control={<Mui.Radio color="primary" id={theme} onClick={handleClick} />} label="Show all" />
                    {typefilter}
                </Mui.RadioGroup>
            </Mui.FormControl>
        </div>
    )
}
