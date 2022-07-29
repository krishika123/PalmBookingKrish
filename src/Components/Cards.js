import React from 'react';
import { Link } from "react-router-dom";


const Cards = ({title,text,image,altText,imgurl}) => {
    return (
            <Link to={imgurl}>
            <div className='container-slide'>
                <img src={image} className="cardimg" alt={altText} />
                <div className="middle">
                    <h4>{title}</h4>
                    <p>{text}</p>
                </div>
            </div>
            </Link>
            
        
    )
}

export default Cards

