import "./rightSidebar.css";

import React from "react";

function RightSidebar() {
  return (
    <div className="right-sidebar">
      <div className="right-sidebar-items">
        <div className="right-sidebar-item">
          <p>Recommended for Anand</p>
          <img
            src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/12/09/1009078-urfi-javed.jpg"
            alt="recommended for Anand"
          />
        </div>
        <div className="right-sidebar-item">
          <p>Trending Topics</p>
          <img
            src="https://www.koimoi.com/wp-content/new-galleries/2022/04/urfi-javed-gets-brutally-trolled-for-flaunting-her-hourglass-figure-in-a-pink-fluorescent-bikini-one-netizen-says-tujhe-dekh-kar-na-hamara-ramzan-01.jpg"
            alt="recommended for Anand"
          />
        </div>
        <div className="right-sidebar-item">
          <p>Editor's choice</p>
          <img
            src="https://blazetrends.com/wp-content/uploads/2022/03/Urfi-Javed-was-seen-climbing-out-of-the-tree-and.jpg"
            alt="recommended for Anand"
          />
        </div>

        <button className="see-more-button">See more</button>
      </div>
    </div>
  );
}

export default RightSidebar;
