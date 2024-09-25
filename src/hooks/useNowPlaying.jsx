import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../utils/nowPlayingSlice";
import { API_OPTIONS } from "../utils/constant";

const useNowPlaying = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNowPlaying = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1" , API_OPTIONS
        );
        const data = await response.json();
        dispatch(addNowPlaying(data.results)); // Dispatching data to Redux store
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
      }
    };

    getNowPlaying();
  }, [dispatch]);
};

export default useNowPlaying;
