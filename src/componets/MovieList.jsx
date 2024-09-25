import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="mb-8 pl-8">
      <h1 className="text-2xl font-bold text-white mb-4 pl-10">{title}</h1>
      <div className="relative">
        <div className="flex overflow-x-auto scrollbar-hide p-4 space-x-4">
          {movies?.map((movie) => (
            <div className="flex-none w-40 md:w-48 lg:w-60 transition-transform duration-200 hover:scale-105" key={movie?.id}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
