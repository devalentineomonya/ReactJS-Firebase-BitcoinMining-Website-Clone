import React from 'react'
import "./SliderCard.css";
const SliderCard = ({SliderImg}) => {
  return (
    <div className="slider-card">
      <img src={SliderImg.src} alt={SliderImg.alt}/>  
      
    </div>
  )
}

export default SliderCard
