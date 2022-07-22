import React from "react"
import { useRecoilState, useRecoilValue } from 'recoil';
import BasicCard from "./Card"

import { typeState, yearState, dataState, counterState} from '../atoms'
import Button from '@mui/material/Button'

export default () => {
    //states
    const type = useRecoilValue(typeState);
    const years = useRecoilValue(yearState);
    const data = useRecoilValue(dataState);
    const [counter, setCounter] = useRecoilState(counterState);
    

    //filterData
    //if type is selected, filter by type and date
    //if type isnt selected, filter only by date
    //Line 25 / 29 -> BasicCard abrufen: key muss für React angegeben werden, key nochmal als id übergeben um in BasicCard weiterzuverwendet (sonst weint React, zeig ich dir morgen) -> ...item = alles von item 
    const filterData = (data) => (type !== "All" ? 
            data.filter(date => 
                checkType(date, "type") && 
                compareType(date) && 
                filterYears(date)).slice(0,counter)
                .map(item => <BasicCard key ={item.key} id = {item.key} {...item} />) 
            : 
                data.filter(date => 
                    filterYears(date)).slice(0,counter)
                    .map(item => <BasicCard key ={item.key} id = {item.key} {...item} />));

    //check for property type to filter                
    const checkType = (item,type) => item.hasOwnProperty(type);

    //check if selected type = type of publication
    const compareType = (item) => item.type[0] === type ;

    //check if selected date = date of publication
    const filterYears = (item) => item.year[0]>=years[0] && item.year[0]<=years[1];
    
    //run filter
    const filteredcards = filterData(data);

    //load 8 more / less cards
    const loadMore = () => setCounter(counter + 8); 
    const loadLess = () => setCounter(counter - 8);
   
    
    //Line 54: {counter > 8 && JSX} -> conditional rendering, only render JSX if counter > 8 -> Load less lädt 8 Karten weniger -> demnach nur rendern wenn mehr als 8 angezeigt werden
    return (
        <div className ="wrapper">
            <div className="objects--Wrapper">
                {filteredcards}
            </div>
            <div className = "objects--Load-more-Button">
            {counter > 8 &&<Button variant="contained" className="load-more-button" onClick={loadLess}>Show less</Button>}
                <Button variant="contained" className="load-more-button" onClick={loadMore}>Show more</Button>
                 
        </div>
        </div>
    )
}