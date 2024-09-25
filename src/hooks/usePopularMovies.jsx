import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  addPopular } from "../utils/nowPlayingSlice";
import { API_OPTIONS } from "../utils/constant";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPopularMovies = async () => {
        try {
            const response = await fetch(
                "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS
            );
            const data = await response.json();
            console.log("Popular Movies Data:", data.results); // Log the fetched data
            dispatch(addPopular(data.results)); // Dispatching data to Redux store
        } catch (error) {
            console.error("Error fetching popular movies:", error);
        }
    };

    getPopularMovies();
  }, [dispatch]);
};

export default usePopularMovies;
