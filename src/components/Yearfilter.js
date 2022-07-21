import * as React from "react"
import { useRecoilState, useRecoilValue, } from 'recoil';
import { yearState, dataState } from "../atoms";

import Slider from '@mui/material/Slider';

export default function Yearfilter() {
    const [years, setYears] = useRecoilState(yearState)
    const data = useRecoilValue(dataState)
    const allyears = []
    data.map(date => allyears.push(parseInt(date.year)))

    const minyears = Math.min(...allyears)
    const maxyears = Math.max(...allyears)

    function changeHandler(e,value) {
        setYears(value)
    }

    return (
        <div className="slider">
            <p className="MuiFormLabel-root">Time filter</p>
            <Slider
                getAriaLabel={() => 'Temperature range'}
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