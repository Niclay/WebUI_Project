import React from "react";
import logo from '../images/favicon-upscaled.png';
import { searchState, themeState } from "../atoms";
import { useRecoilState, useRecoilValue } from "recoil";




export default () => {
const [search, setSearch] = useRecoilState(searchState)
const theme = useRecoilValue(themeState)

const showBody = () => {
    setSearch(document.getElementById("input").value)
    if (document.getElementById("input").value === "") {
      document.getElementsByClassName("error")[0].style.display = "block";
    }
    else {
      document.getElementsByClassName("body")[0].style.display = "block";
      document.getElementsByClassName("welcome")[0].style.display = "none"
  } 
}
return (
    <div id={theme} className="welcome fadeout">
        <div className="welcome--content">
          <h1>Welcome to</h1>
          <h2>Dynamic Publications</h2>
          <br/>
          <div className="welcome--image">
            <img src={logo} alt="" className="rotate"></img>
          </div>
        </div>
        <div className="welcome--search">
          <h3>Search publications</h3>
          <input type="text" id="input" placeholder="Search e.g. Visual Analytics"></input>
          <button type="submit" id="inputButton" onClick={showBody}>
            <i className="fa fa-search"></i>
          </button>
          <div className="error">The search field can not be empty!</div>
        </div>
      </div>
)
}