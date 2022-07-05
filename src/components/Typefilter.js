import React from "react"
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, } from 'recoil';

import Typefilters from "./Typefilters"
import { typeState } from '../atoms'

import * as Mui from '@material-ui/core';





export default function Typefilter(props) {
    const [type, setTypes] = useRecoilState(typeState);


    const typeSet = new Set()

    for (let i = 0; i < props.data.length; i++) {
        if (props.data[i].hasOwnProperty("type")) {
            typeSet.add(props.data[i].type[0])
        }
    }
    const typefilter = [...typeSet].map(item => <Typefilters type={item} />)
   


    return (
        <div className="filterwrap">
            <Mui.FormControl>
                <Mui.FormLabel id="demo-radio-buttons-group-label">Publication Types</Mui.FormLabel>
                <Mui.RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="reset"
                    name="radio-buttons-group"
                >
                <Mui.FormControlLabel value="reset" control={<Mui.Radio color="primary" onClick={() => setTypes("All")}/>} label="Show all publication types" />
                    {typefilter}
                </Mui.RadioGroup>
            </Mui.FormControl>


        </div>
    )
}
