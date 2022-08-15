import * as React from "react"

import { useRecoilState, useRecoilValue, } from 'recoil';
import { yearState, dataState } from "../atoms";

import Slider from '@mui/material/Slider';

export default () => {

    //states
    const [years, setYears] = useRecoilState(yearState)
    const data = useRecoilValue(dataState)

    //create Set for publication years
    const yearSet = new Set();

    //if year exists -> add to Set
    for (let i = 0; i < data.length; i++) {
        if (data[i].hasOwnProperty("year")) {
            yearSet.add(data[i].year[0])
        }
    }

    //min max years to use as slider values
    const minyears = Math.min(...yearSet)
    const maxyears = Math.max(...yearSet)

    //set year values based on slider position
    function changeHandler(e, value) {
        setYears(value)
    }

    //return slider
    return (
        <div className="filter--slider">
            <p className="MuiFormLabel-root">Time filter</p>
            <Slider
                step={1}
                min={minyears}
                max={maxyears}
                defaultValue={[minyears, maxyears]}
                value={years}
                valueLabelDisplay="auto"
                onChange={changeHandler}
            />
        </div>
    )

}