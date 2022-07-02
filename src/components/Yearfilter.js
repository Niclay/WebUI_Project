import * as React from "react"
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, } from 'recoil';
import { yearState } from "../atoms";
import Data from "../data"
import Slider from '@mui/material/Slider';



export default function Yearfilter() {
    const [years, setYears] = useRecoilState(yearState)
    const allyears = []
    Data.map(date => allyears.push(parseInt(date.year)))

    const minyears = Math.min(...allyears)
    const maxyears = Math.max(...allyears)

    function changeHandler(e,value) {
        setYears(value)
    }


    return (
        <div class="slider">
            <p>Time filter</p>
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