import React, { useState } from "react";
import MainContainer from "../../components/MainContainer/MainContainer";
import ProductsContainer from "../../components/Products/ProductsContainer/ProductsContainer";
import ProductsNavigator from "../../components/Products/ProductsNavigator/ProductsNavigator";

const Products = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <MainContainer>
        <ProductsNavigator activeTab={activeTab} setActiveTab={setActiveTab} />
        <ProductsContainer />
      </MainContainer>
    </>
  );
};

export default Products;
