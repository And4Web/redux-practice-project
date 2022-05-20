import "./rightSidebar.css";

import React from "react";

function RightSidebar() {
  return (
    <div className="right-sidebar">
      <div className="right-sidebar-items">
        <div className="right-sidebar-item">
          <p>Recommended for Anand</p>
          <img
            src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
            alt="recommended for Anand"
          />
        </div>
        <div className="right-sidebar-item">
          <p>Trending Topics</p>
          <img
            src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg"
            alt="recommended for Anand"
          />
        </div>
        <div className="right-sidebar-item">
          <p>Editor's choice</p>
          <img
            src="https://www.drivespark.com/images/2021-03/volvo-c40-recharge-17.jpg"
            alt="recommended for Anand"
          />
        </div>

        <button className="see-more-button">See more</button>
      </div>
    </div>
  );
}

export default RightSidebar;
