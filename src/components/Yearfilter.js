import * as React from "react"
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, } from 'recoil';
import { yearState } from "../atoms";

import Slider from '@mui/material/Slider';



export default function Yearfilter(props) {
    const [years, setYears] = useRecoilState(yearState)
    const allyears = []
    props.data.map(date => allyears.push(parseInt(date.year)))

    const minyears = Math.min(...allyears)
    const maxyears = Math.max(...allyears)

    function changeHandler(e,value) {
        setYears(value)
    }


    return (
        <div className="slider">
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