import React from "react"
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, } from 'recoil';
import Data from "../data"
import Typefilters from "./Typefilters"
import { typeState } from '../atoms'
import Button from '@mui/material/Button'
import * as Mui from '@material-ui/core';




export default function Typefilter(props) {
    const typeSet = new Set()
    for (let i = 0; i < Data.length; i++) {
        if (Data[i].hasOwnProperty("type")) {
            typeSet.add(Data[i].type[0])
        }
    }
    const typefilter = [...typeSet].map(item => <Typefilters type={item} />)
    const [type, setTypes] = useRecoilState(typeState);


    return (
        <div className="filterwrap">
            <Mui.FormControl>
                <Mui.FormLabel id="demo-radio-buttons-group-label">Gender</Mui.FormLabel>
                <Mui.RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    {typefilter}
                </Mui.RadioGroup>
            </Mui.FormControl>
            <p><Button variant="outlined" onClick={() => setTypes("")}>Reset filters</Button></p>
        </div>
    )
}
