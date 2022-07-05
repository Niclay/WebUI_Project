import * as React from "react"
import { RecoilRoot, useSetRecoilState } from 'recoil'

import Navbar from './components/Navbar'
import Filters from './components/Filters'
import Objects from './components/Objects'
import './App.css'
import './index.css'






function App() {
  const [fetchedData, setFetchedData] = React.useState([])
  React.useEffect(function() {
    fetch("http://api.vissights.net/semaservice-web-api-vissights/v2/eg/publications/search?q=Visual%20Analytics")
        .then(res => res.json())
        .then(data => setFetchedData(data))
       
}, [])

  

    return (
      <RecoilRoot>
        <Navbar />
        <div className="flex-container">
          <Filters data = {fetchedData} />
          <Objects data = {fetchedData}/>
          
        </div>
      </RecoilRoot>

    );
  
}

export default App
