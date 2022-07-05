import React from "react"
import { useRecoilValue } from "recoil"
import { dataState} from '../atoms'
import Typefilter from './Typefilter'
import Yearfilter from './Yearfilter'


export default function Filters() {
    const data = useRecoilValue(dataState)
    return (
        <div className="filterbox">
            <Typefilter data = {data}/>
            <Yearfilter data = {data}/>

        </div>
    )
}