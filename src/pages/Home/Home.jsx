import React from "react";
import ImageSlider from "../../components/Home/ImageSlider/ImageSlider";
import QuickLinks from "../../components/Home/QuickLinks/QuickLinks";
import ToProductsContainer from "../../components/Home/ToProducts/ToProductsContainer";

const Home = () => {
  return (
    <>
      <ImageSlider />
      <QuickLinks />
      <ToProductsContainer/>
    </>
  );
};

export default Home;
