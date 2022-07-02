import React from "react"
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, } from 'recoil';
import Data from "../data"
import Typefilters from "./Typefilters"
import { typeState } from '../atoms'
import Button from '@mui/material/Button'
import * as Mui from '@material-ui/core';




export default function Typefilter(props) {
    const [type, setTypes] = useRecoilState(typeState);
    const typeSet = new Set()
    for (let i = 0; i < Data.length; i++) {
        if (Data[i].hasOwnProperty("type")) {
            typeSet.add(Data[i].type[0])
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
                    <Mui.FormControlLabel value="reset" control={<Mui.Radio color="primary" onClick={() => setTypes("")}/>} label="Show all publication types" />
                    {typefilter}
                </Mui.RadioGroup>
            </Mui.FormControl>


        </div>
    )
}
