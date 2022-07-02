import React from "react"
import {useRecoilState} from 'recoil';
import Card from "./Card"
import Data from "../data"
import { typeState } from '../atoms'
 
export default function Objects() {

const [type, setType] = useRecoilState(typeState);
const filteredcards = (type !== "" ? Data.filter(date => date.hasOwnProperty("type") && date.type[0] === type).map(item => <Card {...item}/>) : Data.map(item => <Card {...item}/>))
console.log(type)    
return (
    <div className="objects--Wrapper">
        {filteredcards}
    </div>
    )
}