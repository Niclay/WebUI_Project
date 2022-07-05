import React from "react"
import { useRecoilState } from 'recoil';
import BasicCard from "./Card"
import Data from "../data"
import { typeState, yearState, dataState, counterState } from '../atoms'
import Button from '@mui/material/Button'

export default function Objects(props) {

    const [type, setType] = useRecoilState(typeState);
    const [years, setYears] = useRecoilState(yearState)
    const [data, setData] = useRecoilState(dataState)
    const [counter, setCounter] = useRecoilState(counterState)


    const checkType = (item,type) => item.hasOwnProperty(type)
    const compareType = (item)=> item.type[0] === type 
    const filterYears = (item) => item.year[0]>=years[0] && item.year[0]<=years[1]
    const filterData = (data) => (type !== "All" ? 
    data.filter(date => 
        checkType(date, "type") && 
        compareType(date) && 
        filterYears(date))
        .map(item => <BasicCard {...item} />) 
        : 
        data.filter(date => 
            filterYears(date))
            .map(item => <BasicCard {...item} />))
    const filteredcards = filterData(data.slice(0,counter))
    
    const loadMore = () => setCounter(counter + 8); 
    console.log(counter)
    
    
    return (
        <div className="objects--Wrapper">
            {filteredcards}
            <Button onClick={() => loadMore()}>Load more</Button>
        </div>
    )
}