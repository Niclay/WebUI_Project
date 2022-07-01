import React from "react"
import {RecoilRoot,atom,selector,useRecoilState,useRecoilValue,} from 'recoil';

export default function Card(item) {
    return (
       
            <div className="card">
                <h1>{item.title}</h1>
                <p>Journal: {item.journal}</p>
                <p>Veröffentlichungsjahr: {item.year}</p>
                <p>Autoren: {item.author}</p>
                <p>Publicationtype: {item.type}</p>
            </div>
       
    )
}