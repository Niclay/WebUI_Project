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

  //setFetchedData als Statesetter function 
  const setFetchedData = useSetRecoilState(dataState)


  //useEffect ist Hook, der nach dem ersten Rendern der Seite ausgeführt wird
  //fetched data von API, wandelt in JSON um und packt sie in den FetchedData State
  // [] in Line 25 ist das "dependency Array. Wenn sich das Array ändert wird der useEffect Hook erneut ausgeführt -> leer, da wir nur 1x daten abfragen wollen"
  React.useEffect(() => {
    fetch("http://api.vissights.net/semaservice-web-api-vissights/v2/eg/publications/search?q=Visual%20Analytics")
        .then(res => res.json())
        .then(data => setFetchedData(data))    
}, [])

//auskommentierte SetFunction für das Verwenden von lokal gespeicherten Daten anstelle von fetch oben (da firebase ja wegen http rumweint)
//setFetchedData(Data)

//State zum applien von dark / light mode -> wird Wrapper div in line 35 als ID übergeben um verschiedene CSS zu applien
const theme = useRecoilValue(themeState)

//Wrapper -> Navbar -> Filter (Sidebar) / Objects (main content) side by side -> Footer
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


