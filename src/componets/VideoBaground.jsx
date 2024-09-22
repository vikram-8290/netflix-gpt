import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
    // Access the trailer video from the Redux store
    const trailerVideo = useSelector((state) => state.nowPlaying?.videoTrailers);
  
    // Fetch trailer video for the given movieId
    useMovieTrailer(movieId);
  
    return (
      <div className="video-background relative w-screen h-screen flex items-center justify-center bg-black">
        {trailerVideo ? (
          <iframe
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-2xl border-none"
            src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1&controls=0&loop=1"}
            title={trailerVideo?.name || "YouTube video player"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        ) : (
          <p className="text-white text-lg animate-pulse">Loading trailer...</p>
        )}
  
        {/* Overlay for content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-75 pointer-events-none"></div>
      </div>
    );
  };
  
  export default VideoBackground;
  