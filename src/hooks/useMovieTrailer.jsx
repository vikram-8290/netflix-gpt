import { addVideoTrailers } from "../utils/nowPlayingSlice.js";
import { API_OPTIONS } from "../utils/constant.js";
import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch(); // Fixed the typo

  // Wrapping getMovieVideo in useCallback to avoid re-creation on every render
  const getMovieVideo = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/` + movieId + `/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await response.json();

      // Filter trailers
      const filteredTrailers = json.results.filter((video) => video.type === "Trailer");

      // Get the first trailer (if it exists)
      const trailer = filteredTrailers.length > 0 ? filteredTrailers[0] : null;

      console.log(trailer);

      // Dispatch only if a trailer is found
      if (trailer) {
        dispatch(addVideoTrailers(trailer));
      }
    } catch (error) {
      console.error("Error fetching video:", error);
    }
  }, [dispatch, movieId]); // Add dispatch and movieId as dependencies

  useEffect(() => {
    if (movieId) {
      getMovieVideo(); // Call the memoized function
    }
  }, [movieId, getMovieVideo]); // Include getMovieVideo in the dependency array
};

export default useMovieTrailer;
