import React from "react"
import { useRecoilValue, useSetRecoilState, } from 'recoil';

import Typefilters from "./Typefilters"
import { typeState, dataState, themeState, counterState } from '../atoms'

import * as Mui from '@material-ui/core';

export default () =>{
    //States
    const setTypes = useSetRecoilState(typeState);
    const data = useRecoilValue(dataState);
    const setCounter = useSetRecoilState(counterState);
    const theme = useRecoilValue(themeState);

    //Set zum Anzeigen der uniquen Typen zum Filtern (Set kann nur unique values beinhalten)
    const typeSet = new Set()

    //Befüllen des Sets -> Falls der Datensatz die Property "type" hat wird der Wert von "type" in das Set gegeben
    for (let i = 0; i < data.length; i++) {
        if (data[i].hasOwnProperty("type")) {
            typeSet.add(data[i].type[0])
        }
    }

    //Für jeden Typwert im Set oben einen Typefilter erstellen
    const typefilter = [...typeSet].map(item => <Typefilters key ={item} type={item} />)

   
    //Klicken des Radiobuttons "Show all" setzt Typ auf "all" und Counter auf "8" wodurch nur 8 Cards gerendert werden um performanceprobleme zu vermeiden
    const handleClick = () => {
        setTypes("All")
        setCounter(8)
    }

    //Radiobuttons von MaterialUI
    // Line 49 Showall publication types, Line 50 die in Line 27 erstellten Typefilter
    return (
        <div className="filterwrap">
            <Mui.FormControl>
                <Mui.FormLabel 
                    id="demo-radio-buttons-group-label">Publication Types
                </Mui.FormLabel>
                <br/>
                <Mui.RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="reset"
                    name="radio-buttons-group"
                >
                <Mui.FormControlLabel value="reset" control={<Mui.Radio color="primary" id={theme} onClick={handleClick}/>} label="Show all publication types" />
                    {typefilter}
                </Mui.RadioGroup>
            </Mui.FormControl>
        </div>
    )
}
