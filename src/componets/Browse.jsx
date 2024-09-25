import React from "react";
import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying"; // Keep only one import
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";


const Browse = () => {
  
  useNowPlaying(); // This should fetch and dispatch now playing movies
  usePopularMovies();
  useTopRated();

  return (
      <div>
          <Header />
          <MainContainer />
          <SecondaryContainer />
      </div>
  );
};


export default Browse;
