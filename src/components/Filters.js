import React from "react"
import {RecoilRoot,atom,selector,useRecoilState,useRecoilValue,} from 'recoil';
import Typefilter from './Typefilter'
import Yearfilter from './Yearfilter'

export default function Filters() {
    return (
        <div className="filterbox">
            <Typefilter />
            <Yearfilter />
        </div>
    )
}