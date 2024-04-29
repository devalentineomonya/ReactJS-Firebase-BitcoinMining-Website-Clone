import React from "react";
import "./QuickLinks.css";
import QuickLinkItem from "./QuickLinkItem/QuickLinkItem";
import QuickLinksItems from "../../../assets/Data/QuickLinksItems";
const QuickLinks = () => {
  return (
    <div className="quick-link-container">
      <div className="quick-link-grid-container">
        {QuickLinksItems.map((QuickLinksItem) => (
          <QuickLinkItem
            QuickLinksItem={QuickLinksItem}
            key={QuickLinksItem.id}
          />
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
