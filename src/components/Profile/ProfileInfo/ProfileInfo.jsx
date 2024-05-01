import React from 'react'
import "./ProfileInfo.css";
const ProfileInfo = () => {
  return (
    <div className="profile-info-container">
        <div className="user-level-icon">
            <div className="level-image">

            </div>

        </div>
        <div className="user-information">
            <h2>768133220</h2>
            <h3>Next Level </h3>
            <h3>Invite 5 valid users. <span>(3/5)</span></h3>
            <h3><span>OR</span> Team size reaches 15 (3/15)</h3>
        </div>
      
    </div>
  )
}

export default ProfileInfo
