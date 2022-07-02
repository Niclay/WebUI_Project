import React from "react"
import { useRecoilState } from 'recoil';
import BasicCard from "./Card"
import Data from "../data"
import { typeState, yearState } from '../atoms'

export default function Objects(props) {

    const [type, setType] = useRecoilState(typeState);
    const [years, setYears] = useRecoilState(yearState)

    const filteredcards = (type !== "" ? Data.filter(date => date.hasOwnProperty("type") && date.type[0] === type && date.year[0]>=years[0] && date.year[0]<=years[1]).map(item => <BasicCard {...item} />) : Data.filter(date =>date.year[0]>=years[0] && date.year[0]<=years[1]).map(item => <BasicCard {...item} />))

    return (
        <div className="objects--Wrapper">
            {filteredcards}
        </div>
    )
}