import React from "react";
import "./QuickLinkItem.css";
import { Link } from "react-router-dom";
const QuickLinkItem = ({ QuickLinksItem }) => {
  
  return (
    <div className="quick-link-item-container">
      <Link to={QuickLinksItem.href}>
        <div className="quick-link-content">
          <div className="quick-link-image-container">
            <img src={QuickLinksItem.icon} alt={QuickLinksItem.name} />
          </div>
          <p>{QuickLinksItem.name}</p>
        </div>
      </Link>
    </div>
  );
};

export default QuickLinkItem;
