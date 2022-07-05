import React from "react"

import Typefilter from './Typefilter'
import Yearfilter from './Yearfilter'


export default function Filters(props) {
    console.log("Filter updated")
    return (
        <div className="filterbox">
            <Typefilter data = {props.data}/>
            <Yearfilter data = {props.data}/>

        </div>
    )
}