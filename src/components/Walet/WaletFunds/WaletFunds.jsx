import React from 'react'
import "./WaletFund.css"
import WaletItem from '../WaletItem/WaletItem'
const WaletFunds = () => {
  return (
    <div className='walet-funds-container'>
      <WaletItem/>
      <WaletItem/>
      <WaletItem/>
    </div>
  )
}

export default WaletFunds
