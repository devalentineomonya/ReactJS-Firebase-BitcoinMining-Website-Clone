import React from 'react'
import "./WaletQuickLinks.css"
import WaletFundsLink from '../WaletFundsLink/WaletFundsLink'
const WaletQuickLinks = () => {
  return (
    <div className='walet-fund-links-container'>
      <WaletFundsLink/>
      <WaletFundsLink/>
      <WaletFundsLink/>
      <WaletFundsLink/>
    </div>
  )
}

export default WaletQuickLinks
