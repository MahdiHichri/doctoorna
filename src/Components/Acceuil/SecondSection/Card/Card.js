import React, { useState } from "react";

import "./Card.css"

export default function Card(props)
{   
    // var div = document.getElementsByClassName("news-card");
    var background=props.urlToImage;
    var title=props.title
    var description=props.description
   
    function handleClickReadMore()
    {
    
        
        props.getData(props)
       
        
    }
    
    
    
    return(
        <div className="news-card wow fadeInUp" data-wow-delay="0.1s" style={{backgroundImage: `url(${background})`}}>
            <div className="card-content">
                <div className="news-card-title">
                <h2 className="card-title card-title-annimation text-truncate">{title!=null ? title.length>30 ?
                title.slice(0,30)+"..." : title :title}</h2>
                    
                    </div>       
                <div className="news-card-description text-wrap">
                    <p className="card-body">{description!=null ? description.length>90 ?
                description.slice(0,90)+"..." : description :description}</p>
                </div>
                <a href="#" id={props.btnId} onClick={handleClickReadMore} data-bs-toggle="modal" data-bs-target="#exampleModal" 
                className="button">Read More</a>
            </div>
           
                       
            
        </div>

    )
}