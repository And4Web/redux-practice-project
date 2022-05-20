import React from "react";
import "./home.css";

import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";

function Home() {
  return (
    <>
      <div className="home">
        <Header />
        <div className="home-body">
          <LeftSidebar />
        </div>
      </div>
    </>
  );
}

export default Home;
