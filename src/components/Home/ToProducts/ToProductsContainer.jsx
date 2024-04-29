import React from "react";
import ProductCard from "../../Cards/ProductCard/ProductCard";
import ProductItemsList from "../../../assets/Data/ProductItemsList";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ToProductsContainer.css";
import "swiper/css";
import { IoChevronForward } from "react-icons/io5";
const ToProductsContainer = () => {
  return (
    <div className="product-list-swiper-container">
      <div className="product-list-title">
        <h3>Products</h3>
        <a href="/products">
          More <IoChevronForward size={20} className="icon-white" />
        </a>
      </div>
      <Swiper spaceBetween={20} slidesPerView={3} loop={true}>
        {ProductItemsList.slice(0, 5).map((productItem) => (
          <SwiperSlide key={productItem.id}>
            <ProductCard productItem={productItem} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ToProductsContainer;
