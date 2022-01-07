import React from 'react';
import "../App.css" ;
import { FaSpotify,FaTwitter } from "react-icons/fa";
import { WiDaySnowWind } from "react-icons/wi";
import { IoMdBasketball} from "react-icons/io";
import { BiHeadphone,BiPaperPlane,BiRestaurant } from "react-icons/bi";

const Project = () => {
    return (
        <>
        <div className='ProjectDes'>
            <h3  id='Projectanimation'><b>Projects:</b>These are the self made projects of mine that are publically avialable on above mentioned Github Account </h3>
            <ul>
              <li>Spotify Clone <FaSpotify/></li>
              <li>Weather<WiDaySnowWind/></li>
              <li>Emoji App <IoMdBasketball/></li>
              <li>MusicPlayer<BiHeadphone/></li>
              <li>Twitter Clone <FaTwitter/></li>
              <li>Restaurant App<BiRestaurant/></li>
              <li>Login Page <BiPaperPlane/></li>
           </ul>
        </div>
       </> 
    )
}

export default Project
