import * as React from "react"
import { RecoilRoot } from 'recoil'
import Navbar from './components/Navbar'
import Filters from './components/Filters'
import Objects from './components/Objects'
import './App.css'
import './index.css'




function App() {
  
    return (
      <RecoilRoot>
        <Navbar />
        <div className="flex-container">
          <Filters />
          <Objects />
        </div>
      </RecoilRoot>

    );
  
}

export default App
