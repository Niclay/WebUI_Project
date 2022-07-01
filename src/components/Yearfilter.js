import React from "react"
import {RecoilRoot,atom,selector,useRecoilState,useRecoilValue,} from 'recoil';


export default function Yearfilter () {
    return (
        <div className="filterwrap">
            <div className="filter--title">
                <h1>Filter year:</h1>
            </div>
        </div>
    )
}