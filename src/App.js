import * as React from "react"
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { dataState, themeState} from './atoms'
import Navbar from './components/Navbar'
import Filters from './components/Filters'
import Objects from './components/Objects'
import './App.css'
import './index.css'

function App() {

  const setFetchedData = useSetRecoilState(dataState)
  React.useEffect(function() {
    fetch("http://api.vissights.net/semaservice-web-api-vissights/v2/eg/publications/search?q=Visual%20Analytics")
        .then(res => res.json())
        .then(data => setFetchedData(data))
       
}, [])
  
const theme = useRecoilValue(themeState)
    return (
        <div id={theme}>
          <Navbar />
          <div className="flex-container">
            <Filters />
            <Objects />
            
          </div>
        </div>
    );
  
}

export default App
