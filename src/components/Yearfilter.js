import * as React from "react"
import { useRecoilState, useRecoilValue, } from 'recoil';
import { yearState, dataState } from "../atoms";

import Slider from '@mui/material/Slider';

export default function Yearfilter() {
    //states
    const [years, setYears] = useRecoilState(yearState)
    const data = useRecoilValue(dataState)

    //alle Jahreszahlen, leeres Array
    const allyears = []
    //alle Jahreszahlen Array befüllen
    data.map(date => allyears.push(parseInt(date.year)))

    //min year, maxyear um start / ende des sliders festzulegen
    const minyears = Math.min(...allyears)
    const maxyears = Math.max(...allyears)


    //value = die 2 Werte des Sliders -> bei Ändern des Sliders wird der yearState geändert um damit dann zu filtern
    function changeHandler(e,value) {
        setYears(value)
    }

    //Material UI Slider, properties sollten selbsterklärend sein
    return (
        <div className="slider">
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