import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ movie }) => {
    console.log(movie)
    return (
      <div className="relative pr-2">
        <img
          src={IMG_CDN_URL + movie?.poster_path}
          alt={movie?.title}
          className="w-full h-auto rounded-lg transition-transform duration-200 hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white text-sm rounded-b-lg">
          {movie?.title}
        </div>
      </div>
    );
  };
  
  export default MovieCard;
  