import React from 'react'
import "./ProfileQuickLinks.css"
import WaletFundsLink from '../../Walet/WaletFundsLink/WaletFundsLink'
const ProfileQuickLinks = () => {
  return (
    <div className='profile-quick-links-container'>
        <div className='quick-links-center'></div>
      <WaletFundsLink/>
      <WaletFundsLink/>
      <WaletFundsLink/>
      <WaletFundsLink/>
      <WaletFundsLink/>
      <WaletFundsLink/>
    </div>
  )
}

export default ProfileQuickLinks
