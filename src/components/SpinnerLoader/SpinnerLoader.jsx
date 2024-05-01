import React from 'react'
import "./SpinnerLoader.css"
import loadingImage from "../../assets/Images/SiteImages/SiteIcons/loading.png"
import MainContainer from '../MainContainer/MainContainer'
const SpinnerLoader = () => {
  return (
    <MainContainer pb="0px" showNav={false}>
    <div className='loading-container'>
      <img src={loadingImage} alt="" />
    </div>
    </MainContainer>
  )
}

export default SpinnerLoader
