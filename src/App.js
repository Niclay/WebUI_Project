import * as React from "react"
import Navbar from './components/Navbar'
import Filters from './components/Filters'
import Objects from './components/Objects'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import './App.css'
import './index.css'

import { useRecoilValue, useSetRecoilState} from 'recoil'
import { dataState, themeState, searchState} from './atoms'



export default () => {

  //states
  const setFetchedData = useSetRecoilState(dataState)
  const search = useRecoilValue(searchState)
  const theme = useRecoilValue(themeState)
  
  const formattedSearch = encodeURIComponent(search.trim());
 
  //fetch data and set fetched data
  React.useEffect(() => {
    fetch(`https://api.vissights.net/semaservice-web-api-vissights/v2/eg/publications/search?q=${formattedSearch}`)
      .then(res => res.json())
      .then(data => setFetchedData(data))
  }, [search])

  //return Components
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


