import React from "react";
import ImageSlider from "../../components/Home/ImageSlider/ImageSlider";
import QuickLinks from "../../components/Home/QuickLinks/QuickLinks";
import ToProductsContainer from "../../components/Home/ToProducts/ToProductsContainer";
import NewContainer from "../../components/Home/News/NewContainer";
import MainContainer from "../../components/MainContainer/MainContainer";
const Home = () => {
  return (
    <MainContainer>
      <ImageSlider />
      <QuickLinks />
      <ToProductsContainer />
      <NewContainer />
    </MainContainer>
  );
};

export default Home;
