import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <div className="home">
        <Header />
        <h1>
          <HomeIcon />
          Home
        </h1>
      </div>
    </>
  );
}

export default Home;
