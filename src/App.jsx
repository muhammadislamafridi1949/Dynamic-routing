import React from 'react'
import { Routes , Route } from "react-router"
import "./App.css"
import Card from './component/card/Card'
import Cardview from './component/cardview/Cardview'
import Deatail from './component/deatail/Deatail'


function App() {
    return (
    <div>
      {/* <Cardview /> */}
  <Routes>
      <Route path="/" element={<Cardview/>}/>
      <Route path="/card" element={<Cardview/>}/>
      <Route path="/card/:id" element={<Deatail/>}/>
  </Routes>
        </div>
      )
    
}


export default App