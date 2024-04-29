import React from "react";
import "./NewsCard.css";
import textimg from "../../../assets/Images/SiteImages/CompanyImages/companyImg (1).jpg";
import { IoEye } from "react-icons/io5";
const NewsCard = () => {
  return (
    <div className="new-card-container">
      <img src={textimg} alt="test Image" />
      <div className="news-viewers-count">
        <IoEye />
        <span>2000 Viewers</span>
      </div>
    </div>
  );
};
export default NewsCard;
