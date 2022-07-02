import React from "react"
import {RecoilRoot,atom,selector,useRecoilState,useRecoilValue,} from 'recoil';
import Typefilter from './Typefilter'
import Yearfilter from './Yearfilter'


export default function Filters() {
    console.log("Filter updated")
    return (
        <div className="filterbox">
            <Typefilter />
            <Yearfilter />

        </div>
    )
}