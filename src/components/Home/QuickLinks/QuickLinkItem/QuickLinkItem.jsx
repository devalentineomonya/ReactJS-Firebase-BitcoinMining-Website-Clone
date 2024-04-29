import React from "react";
import "./QuickLinkItem.css";
const QuickLinkItem = ({ QuickLinksItem }) => {
  
  return (
    <div className="quick-link-item-container">
      <a href={QuickLinksItem.href}>
        <div className="quick-link-content">
          <div className="quick-link-image-container">
            <img src={QuickLinksItem.icon} alt={QuickLinksItem.name} />
          </div>
          <p>{QuickLinksItem.name}</p>
        </div>
      </a>
    </div>
  );
};

export default QuickLinkItem;
