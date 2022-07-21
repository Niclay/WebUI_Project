import * as React from "react"
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { dataState, themeState} from './atoms'
import Navbar from './components/Navbar'
import Filters from './components/Filters'
import Objects from './components/Objects'
import Footer from './components/Footer'
import Data from './Data.json'
import './App.css'
import './index.css'

export default function App() {

  const setFetchedData = useSetRecoilState(dataState)
  /*React.useEffect(() => {
    fetch("http://api.vissights.net/semaservice-web-api-vissights/v2/eg/publications/search?q=Visual%20Analytics")
        .then(res => res.json())
        .then(data => setFetchedData(data))
       
}, [])*/
setFetchedData(Data)
  
const theme = useRecoilValue(themeState)
    return (
        <div id={theme} className="body">
          <Navbar />
          <div className="flex-container">
            <Filters />
            <Objects />
          </div>
          <Footer/>
        </div>
    );
  
}


