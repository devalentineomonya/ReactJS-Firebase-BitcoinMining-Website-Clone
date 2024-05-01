import React from "react";
import "./ProductCard.css";

const ProductCard = ({productItem, width="125px", height="150px"}) => {
  
  return (
    <div className="product-card-container" style={{width:width, height:height}}>
      <div className="product-image-container">
        <img src={productItem && productItem.image} alt={productItem && productItem.name} />
      </div>
      <div className="product-info-container">
        <h3>{productItem && productItem.name}</h3>
        <h3>Ksh {productItem && productItem.price}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
