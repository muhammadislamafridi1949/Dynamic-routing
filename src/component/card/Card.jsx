import "./Card.css"
import Button from "../button/Button"
import { useNavigate } from "react-router"
import { NavLink } from 'react-router-dom'


const Card = ({data }) => {    
    const {navigate} = useNavigate()
    const {background, profileImage,name,profession,description,profileLink ,ide} = data
    return (
        <div className='profile-card'>
            <div className="background-image" >
               <img src={background} alt="" />
               <img src={profileImage} alt="" />
            </div>
            <div className="user-detail">
                <h3>
                   {name}
                </h3>
                <h6>
                  {profession}
                </h6>
                <p>
                   {description}
                </p>
                <div className="font-wrapper">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-twitter"></i>    
                </div>
                <NavLink to={`/card/${ide}`}>
                <Button title={"view profile"}/>
                </NavLink>
            </div>
        </div>
    )
}

export default Card