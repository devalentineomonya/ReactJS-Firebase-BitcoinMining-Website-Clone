import React from "react";
import ProductCard from "../../Cards/ProductCard/ProductCard";
import ProductItemsList from "../../../assets/Data/ProductItemsList";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ToProductsContainer.css";
import "swiper/css";
import { IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";
const ToProductsContainer = () => {
  return (
    <div className="product-list-swiper-container">
      <div className="product-list-title">
        <h3 className="section-title">Products</h3>
        <Link to="/products">
          More <IoChevronForward size={20} className="icon-white" />
        </Link>
      </div>
      <Swiper spaceBetween={20} slidesPerView={3} loop={true}>
        {ProductItemsList.slice(0, 5).map((productItem) => (
          <SwiperSlide key={productItem.id}>
            <Link to={`products/${productItem.id}`}>
              <ProductCard productItem={productItem} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ToProductsContainer;
