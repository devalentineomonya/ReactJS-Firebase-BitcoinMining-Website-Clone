import React from 'react'
import MainContainer from '../../components/MainContainer/MainContainer'
import ProfileInfo from '../../components/Profile/ProfileInfo/ProfileInfo'
import ProfileIncome from '../../components/Profile/ProfileIncome/ProfileIncome'
import ProfileQuickLinks from '../../components/Profile/ProfileQuickLinks/ProfileQuickLinks'
import "./Profile.css"
const Profile = () => {
  return (
  <MainContainer>
    <div className='profile-page-container'>
    <ProfileInfo/>
    <ProfileIncome/>
    <ProfileQuickLinks/>
    </div>
  </MainContainer>
  
  )
}

export default Profile
