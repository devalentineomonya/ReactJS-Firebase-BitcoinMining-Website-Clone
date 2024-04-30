import React from 'react'
import "./SpinnerLoader.css"
import loadingImage from "../../assets/Images/SiteImages/SiteIcons/loading.png"
const SpinnerLoader = () => {
  return (
    <div className='loading-container'>
      <img src={loadingImage} alt="" />
    </div>
  )
}

export default SpinnerLoader
