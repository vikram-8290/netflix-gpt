import VideoTitle from "./VideoTitle";
import VideoBaground from "./VideoBaground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((state) => state.nowPlaying?.nowPlaying);
  if (!movies) return null;

  const mainMovie = movies[0];

  return (
    <div className="relative w-full h-screen">
      {/* Background video */}
      <VideoBaground movieId={mainMovie?.id} />

      {/* Movie details overlay */}
      <div className="absolute bottom-0 left-0 p-8 md:p-16 text-white z-10 w-full md:max-w-2xl bg-gradient-to-t from-black via-transparent to-transparent">
        <VideoTitle title={mainMovie?.title} overview={mainMovie?.overview} />
      </div>
    </div>
  );
};

export default MainContainer;
