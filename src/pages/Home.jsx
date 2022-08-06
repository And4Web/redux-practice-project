import React from "react";
import "./home.css";

import Header from "../components/header/Header";
import LeftSidebar from "../components/leftSidebar/LeftSidebar";
import RightSidebar from "../components/RightSidebar/RightSidebar";
import Body from "../components/body/Body";

function Home() {
  return (
    <>
      <div className="home">
        <Header />
        <div className="home-body">
          <LeftSidebar />
          <Body />
          <RightSidebar />
        </div>
      </div>
    </>
  );
}

export default Home;
