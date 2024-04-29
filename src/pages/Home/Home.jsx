import React from "react";
import ImageSlider from "../../components/Home/ImageSlider/ImageSlider";
import QuickLinks from "../../components/Home/QuickLinks/QuickLinks";
import ToProductsContainer from "../../components/Home/ToProducts/ToProductsContainer";
import NewContainer from "../../components/Home/News/NewContainer";

const Home = () => {
  return (
    <>
      <ImageSlider />
      <QuickLinks />
      <ToProductsContainer/>
      <NewContainer/>
    </>
  );
};

export default Home;
