import React from "react";
import "./NewContainer.css";
import NewsCard from "../../Cards/NewsCard/NewsCard";
import { Swiper, SwiperSlide } from "swiper/react";
const NewContainer = () => {
  return (
    <div className="new-card-main-container">
      <div className="new-card-container-title">
        <h3 className="section-title">News</h3>
      </div>
      <Swiper>
        <SwiperSlide>
          <NewsCard />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default NewContainer;
