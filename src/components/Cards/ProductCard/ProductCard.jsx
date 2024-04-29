import React from "react";
import "./ProductCard.css";

const ProductCard = ({productItem}) => {
  return (
    <div className="product-card-container">
      <div className="product-image-container">
        <img src={productItem.image} alt={productItem.name} />
      </div>
      <div className="product-info-container">
        <h3>{productItem.name}</h3>
        <h3>Ksh {productItem.price}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
