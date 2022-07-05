import * as React from "react"
import { useSetRecoilState } from 'recoil'
import { dataState} from './atoms'
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
  
    return (
        <div className="appWrap">
          <Navbar />
          <div className="flex-container">
            <Filters />
            <Objects />
            
          </div>
        </div>
    );
  
}

export default App
