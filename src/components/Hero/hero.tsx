import React from "react";
import "./hero.css"

const hero : React.FC=()=>{

    return(
        <section className="hero">
            <div className="section1">
                <img src="imgs/The Power of ChatGPT on WhatsApp.png"/>
                <img src="imgs/pic1.png"/>

                <div className="section2">
                    <img className="base-image" src="imgs/signup with whatsapp.png"/>
                    <img className="overlay-image" src="imgs/whatsapp_logo.png"/>
                </div>

                <div className="section4">
                <ul>
                    <li>
                        <img src="imgs/writer1.png"/>
                        <img src="imgs/Writer.png" className="ll"/>
                    </li>
                    <li>
                        <img src="imgs/blogger1.png"/>
                        <img src="imgs/Blogger.png" className="ll"/>
                    </li>
                    <li>
                        <img src="imgs/Marketer1.png"/>
                        <img src="imgs/Marketer.png" className="ll"/>
                    </li>
                    <li>
                        <img src="imgs/Freelancer1.png"/>
                        <img src="imgs/Freelancer.png" className="ll"/>
                    </li>
                </ul>
            </div>
                
            </div>          


            

            <div className="section3">
                <img src="imgs/whatsapp.png"/>
            </div>

        </section>
    );
}

export default hero;