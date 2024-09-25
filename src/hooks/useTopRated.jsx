import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  addTopRated, t } from "../utils/nowPlayingSlice";
import { API_OPTIONS } from "../utils/constant";

const useTopRated = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTopRated = async () => {
        try {
            const response = await fetch(
                "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_OPTIONS
            );
            const data = await response.json();
            console.log("Popular Movies Data:", data.results); // Log the fetched data
            dispatch(addTopRated(data.results)); // Dispatching data to Redux store
        } catch (error) {
            console.error("Error fetching popular movies:", error);
        }
    };

    getTopRated();
  }, [dispatch]);
};

export default useTopRated;
