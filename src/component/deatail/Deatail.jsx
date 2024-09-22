import React from 'react'
import Button from '../button/Button'
import "./Deatail.css"
import { useParams } from 'react-router'
import { cardData } from '../../utils/constant/cardData'

const Deatail = () => {
    const {id} = useParams()
    const singleData = cardData.find((item)=>{
        return item.ide === Number(id)
    })
    console.log(singleData)

    const {background, profileImage,name,profession,description,profileLink}= singleData
    return (
        <div className='deatail-wrapper'>
            <div className='image-wrapper'>
                <img src={profileImage} alt="" /></div>
            <div>
                <h1>{name}</h1>
                <h3>{profession}</h3>
                <p>{description}</p>
                <div>     
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-twitter"></i>  </div>
                <Button title={"Buy me a coffee"} />
            </div>
        </div>
    )
}

export default Deatail