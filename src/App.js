import * as React from "react"

import { useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'
import { dataState, themeState, searchState} from './atoms'
import Navbar from './components/Navbar'
import Filters from './components/Filters'
import Objects from './components/Objects'
import Footer from './components/Footer'
import './App.css'
import './index.css'
import logo from './images/favicon-upscaled.png'

export default () => {

  //states
  const setFetchedData = useSetRecoilState(dataState)
  const [search, setSearch] = useRecoilState(searchState)
  const theme = useRecoilValue(themeState)
  
  const formattedSearch = encodeURIComponent(search.trim());
 
  //fetch data
  React.useEffect(() => {
    fetch(`https://api.vissights.net/semaservice-web-api-vissights/v2/eg/publications/search?q=${formattedSearch}`)
      .then(res => res.json())
      .then(data => setFetchedData(data))
  }, [search])

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


  var enter = document.getElementById("input");
  if(enter) {
    enter.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("inputButton").click();
    }
  })};
  return (
    <div className="root">
      <div id={theme} className="welcome fadeout">
        <div className="welcome--content">
          <h1>Welcome to</h1>
          <h2>Dynamic Publications</h2>
          <br/>
          <img src={logo} alt="" className="rotate"></img>
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
      <div id={theme} className="body">
        <Navbar />
        <div className="flex-container">
          <Filters />
          <Objects />
        </div>
        <Footer />
      </div>
    </div>
  );

}


