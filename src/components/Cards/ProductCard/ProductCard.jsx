import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ productItem, width = "125px", height = "150px" }) => {
  return (
    <Link to={`/product/${(productItem && productItem.id) || 1}`}>
      <div
        className="product-card-container"
        style={{ width: width, height: height }}
      >
        <div className="product-image-container">
          <img
            src={productItem && productItem.image}
            alt={productItem && productItem.name}
          />
        </div>
        <div className="product-info-container">
          <h3>{productItem && productItem.name}</h3>
          <h3>Ksh {productItem && productItem.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
