import * as React from "react"

import { useRecoilState, useRecoilValue, } from 'recoil';
import { yearState, dataState } from "../atoms";

import Slider from '@mui/material/Slider';

export default () => {

    //states
    const [years, setYears] = useRecoilState(yearState)
    const data = useRecoilValue(dataState)

  
   const yearSet = new Set();
    for (let i = 0; i < data.length; i++) {
        if (data[i].hasOwnProperty("year")) {
            yearSet.add(data[i].year[0])
        }
    }
    const minyears = Math.min(...yearSet)
    const maxyears = Math.max(...yearSet)

    function changeHandler(e,value) {
        setYears(value)
    }

    return (
        <div className="filter--slider">
            <p className="MuiFormLabel-root">Time filter</p>
            <Slider
                step= {1}
                min= {minyears}
                max= {maxyears}
                defaultValue = {[minyears, maxyears]}
                value = {years}
                valueLabelDisplay="auto"
                onChange={changeHandler}
            />
        </div>
    )

}