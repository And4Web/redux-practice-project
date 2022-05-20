import React from "react";
import "./home.css";

import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Body from "../components/Body";

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
