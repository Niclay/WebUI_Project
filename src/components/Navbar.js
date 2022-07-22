import React from "react"

//selbst erstelltes Logo
import logo from '../images/9995d045c9ba421c95a51098e82b8b8a__1_-removebg-preview.png'


//einfach HTML, links Logo rechts H1
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar--logo">
                <img src={logo} className="logo" alt=""></img>
            </div>
            <div className="navbar--h1">
                <h1>Dynamic Publications Viewer Tool</h1>  
            </div>
        </div>
    )
}

