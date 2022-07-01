import React from "react"
import {RecoilRoot,atom,selector,useRecoilState,useRecoilValue,} from 'recoil';
import Data from "../data"
import Typefilters from "./Typefilters"
import { typeState } from '../atoms'




export default function Typefilter (props) {
    const typeSet = new Set()
    for (let i = 0; i < Data.length;i++) {
      if (Data[i].hasOwnProperty("type")) {
          typeSet.add(Data[i].type[0]) 
      } 
    }
    const typefilter = [...typeSet].map(item => <Typefilters type={item}/>)
    const [type, setTypes] = useRecoilState(typeState);


    return (
        <div className="filterwrap">
            <div className="filter--title">
                <h1>Filter type:</h1>
            </div>
            {typefilter }
            <button class="button-13" onClick={() => setTypes("")}>Reset</button>
        </div>
    )
}
