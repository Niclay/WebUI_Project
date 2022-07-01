import React from "react"
import {RecoilRoot,atom,selector,useRecoilState,useRecoilValue, useSetRecoilState,} from 'recoil';
import { typeState } from '../atoms'



export default function Typefilters(props) {
    const [type, setTypes] = useRecoilState(typeState);
    return (
        <p><button class="button-13" onClick={() => setTypes(props.type)}>{props.type}</button></p>
    )
}