import React from "react"
import { useRecoilState, useRecoilValue } from 'recoil';

import Card from "./Card"
import { typeState, yearState, dataState, counterState, searchState} from '../atoms'

import Button from '@mui/material/Button'

export default () => {
    //states
    const type = useRecoilValue(typeState);
    const years = useRecoilValue(yearState);
    const data = useRecoilValue(dataState);
    const [counter, setCounter] = useRecoilState(counterState);
    const search = useRecoilValue(searchState);

    
    /*filterData
    //if type is selected, filter by type and date
    //if type isnt selected, filter only by date
    //return Card based on filtered data
    */

    const filterData = (data) => (type !== "All" ? 
            data.filter(date => 
                checkType(date, "type") && 
                compareType(date) &&
                checkYear(date, "year") &&
                filterYears(date)).slice(0,counter)
                .map(item => <Card key ={item.key} id = {item.key} {...item} />) 
            : 
                data.filter(date => 
                    checkYear(date, "year") &&
                    filterYears(date)).slice(0,counter)
                    .map(item => <Card key ={item.key} id = {item.key} {...item} />));

    //check for property type to filter                
    const checkType = (item,type) => item.hasOwnProperty(type);

    //check for property year to filter
    const checkYear = (item,year) => item.hasOwnProperty(year);

    //check if selected type = type of publication
    const compareType = (item) => item.type[0] === type ;

    //check if selected date = date of publication
    const filterYears = (item) => item.year[0]>=years[0] && item.year[0]<=years[1];
    
    //run filter
  

    //load 8 more / less cards
    const loadMore = () => setCounter(counter + 8); 
    const loadLess = () => setCounter(counter - 8);
   if ( search === "" || data === null){
    return (
        <div className="objects--error">The search field can not be empty!</div>
    )
   }
    else if (data.length=== 0 ) {
        return (
            <div className="objects--error">No publications found. Please try again.</div>
        )
    }
   else {
    return (
        <div className ="wrapper">
            <div className="objects--Wrapper">
                {filterData(data)}
            </div>
            <div className = "objects--Load-more-Button">
            {counter > 8 &&<Button variant="contained" className="load-more-button" onClick={loadLess}>Show less</Button>}
                <Button variant="contained" className="load-more-button" onClick={loadMore}>Show more</Button>
            </div>
        </div>
    )
   }
}