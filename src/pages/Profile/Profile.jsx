import React from 'react'
import MainContainer from '../../components/MainContainer/MainContainer'
import ProfileInfo from '../../components/Profile/ProfileInfo/ProfileInfo'
import ProfileIncome from '../../components/Profile/ProfileIncome/ProfileIncome'

const Profile = () => {
  return (
  <MainContainer>
    <ProfileInfo/>
    <ProfileIncome/>
  </MainContainer>
  
  )
}

export default Profile
