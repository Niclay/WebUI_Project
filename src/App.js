import * as React from "react"

import { useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'
import { dataState, themeState, searchState} from './atoms'
import Navbar from './components/Navbar'
import Filters from './components/Filters'
import Objects from './components/Objects'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import './App.css'
import './index.css'


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
      <Welcome />
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


