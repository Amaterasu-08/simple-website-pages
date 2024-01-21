import React from "react";
import "./Review.css"

const Review: React.FC = ()=>{

    return(
        <section className="review">
            <div className="a">
                <h1>WriteEase<br/> Recieved 4.8/5 <br/>Stars in over<br/> 10,000+ Reviews</h1>
            </div>
            <div className="b">
                <div className="bb">
                    <img src="imgs/Group 3.png"/>
                </div>
                <div className="tina">
                    <img src="imgs/Never been easy.png"/>
                    <img src="imgs/Writing great marketing copy has never been this easy. Since I started using Copy.ai, I spend only a few minutes to whip myself a good piece.png"/>
                    <img className="name" src="imgs/Tina.png"/>
                </div>
                <div className="Anurag">
                     <img src="imgs/Amazing.png"/>
                     <img src="imgs/I spend only a few minutes to whip myself a good piece.png"/>
                     <img src="imgs/Anuraag.png"/>
                </div>
                <div className="Rakesh">
                     <img src="imgs/Fantastic.png"/>
                     <img src="imgs/Writing great marketing copy has never been this easy. Since I started using Copy.ai, I spend only a few minutes to whip myself a good piece.png"/>
                     <img src="imgs/Rakesh.png"/>
                </div>
            </div>

            <div className="c">
                <div className="cc">
                    <img src="imgs/Group 3.png"/>

                </div>                
                <div className="Rahul">
                    <img src="imgs/Very Easy.png"/>
                    <img src="imgs/Writing great marketing copy has never been this easy. Since I started using Copy.ai, I spend only a few minutes to whip myself a good piece.png"/>
                    <img src="imgs/Rahul.png"/>
                </div>
                <div className="Saini">
                     <img src="imgs/Time Saving.png"/>
                     <img src="imgs/Amazing product. Helps me to write clearly all of my assignments.png"/>
                     <img src="imgs/Saini.png"/>
                </div>
                <div className="Shila">
                     <img src="imgs/Never been easy.png"/>
                     <img src="imgs/Writing great marketing copy has never been this easy. Since I started using Copy.ai, I spend only a few minutes to whip myself a good piece.png"/>
                     <img src="imgs/Shila.png"/>
                </div>
            </div>
        </section>
    );
}

export default Review;