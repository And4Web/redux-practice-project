import "./leftSidebar.css";
import React from "react";

import HomeIcon from "@mui/icons-material/Home";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import GroupsIcon from "@mui/icons-material/Groups";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import VideoSettingsIcon from "@mui/icons-material/VideoSettings";
import ScheduleIcon from "@mui/icons-material/Schedule";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

function LeftSidebar() {
  return (
    <div className="left-sidebar">
      <div className="left-sidebar-menu">
        <HomeIcon />
        <p>Homepage</p>
      </div>

      <div className="left-sidebar-menu">
        <FormatListBulletedIcon />
        <p>Lists</p>
      </div>

      <div className="left-sidebar-menu">
        <ProductionQuantityLimitsIcon />
        <p>Products</p>
      </div>

      <div className="left-sidebar-menu">
        <GroupsIcon />
        <p>Groups</p>
      </div>

      <div className="left-sidebar-menu">
        <AutoStoriesIcon />
        <p>Pages</p>
      </div>

      <div className="left-sidebar-menu">
        <PhotoSizeSelectActualIcon />
        <p>Photos</p>
      </div>

      <div className="left-sidebar-menu">
        <VideoSettingsIcon />
        <p>Videos</p>
      </div>

      <div className="left-sidebar-menu">
        <ScheduleIcon />
        <p>Schedule</p>
      </div>

      <div className="left-sidebar-menu">
        <FavoriteBorderIcon />
        <p>Wishlist</p>
      </div>

      <div className="left-sidebar-menu">
        <SettingsIcon />
        <p>Settings</p>
      </div>

      <div className="left-sidebar-menu">
        <LogoutIcon />
        <p>Logout(Anand)</p>
      </div>
    </div>
  );
}

export default LeftSidebar;
