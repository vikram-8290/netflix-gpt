import React from "react";
import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying"; // Keep only one import
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPlaying(); // This should fetch and dispatch now playing movies

  return (
      <div>
          <Header />
          <MainContainer />
      </div>
  );
};


export default Browse;
