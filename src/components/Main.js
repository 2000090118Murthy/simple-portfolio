import React from "react";
import './Styles/Main.scss'
import { Instagram, LinkedIn, Twitter,Facebook } from "@mui/icons-material";
import  img2 from './Assests/img2.jpg'
const Main=()=>{
    return(
        <div className="main">
            <div className="main__container">
                <div className="main_content">
                    <div className="text">
                        <p>
                            Hello Everyone !
                        </p>
                        <h1>I am Satya</h1>
                        <p>Front-end Developer & Designer</p>
                        <div className="icons">
                            <Twitter className="icon"/>
                            <Instagram className="icon"/>
                            <Facebook className="icon"/>
                            <LinkedIn className="icon"/>
                        </div>
                        <div className="buttons">
                            <button>See Me</button>
                            <button>Hire Me</button>
                        </div>
                    </div>

                </div>
                <div className="main__img">
                    <img src={img2} alt=""/>
                </div>

            </div>

        </div>
    )
}
export default Main