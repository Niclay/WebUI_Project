import React from "react"
import { useRecoilState, useRecoilValue } from 'recoil';
import BasicCard from "./Card"

import { typeState, yearState, dataState, counterState} from '../atoms'
import Button from '@mui/material/Button'

export default () => {

    const type = useRecoilValue(typeState);
    const years = useRecoilValue(yearState)
    const data = useRecoilValue(dataState)
    const [counter, setCounter] = useRecoilState(counterState)
    

    const checkType = (item,type) => item.hasOwnProperty(type)


    const compareType = (item) => item.type[0] === type 
    const filterYears = (item) => item.year[0]>=years[0] && item.year[0]<=years[1]
    const filterData = (data) => (type !== "All" ? 
        data.filter(date => 
            checkType(date, "type") && 
            compareType(date) && 
            filterYears(date)).slice(0,counter)
            .map(item => <BasicCard {...item} />) 
            : 
            data.filter(date => 
                filterYears(date)).slice(0,counter)
                .map(item => <BasicCard key = {item.key} {...item} />))
    const filteredcards = filterData(data)
    const loadMore = () => setCounter(counter + 8); 
    const loadLess = () => setCounter(counter - 8);
   
    
    return (
        <div className ="wrapper">
            <div className="objects--Wrapper">
                {filteredcards}
            </div>
            <div className = "objects--Load-more-Button">
                <Button variant="contained" className="load-more-button" onClick={loadMore}>Show more</Button>
                <Button variant="contained" className="load-more-button" onClick={loadLess}>Show less</Button>
        </div>
        </div>
    )
}