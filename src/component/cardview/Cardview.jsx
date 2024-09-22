import React from 'react'
import Card from '../card/Card'
import { cardData } from '../../utils/constant/cardData.js'
import "./Cardview.css"

function Cardview() {
  return (
 
    <div className='parent-card'>
     {
           cardData.map((item , index ) => {
             return ( 
               <Card key={index} data={item} />
           )})
     }
        </div>
  )
}

export default Cardview