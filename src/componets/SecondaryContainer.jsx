import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () =>{

    const movies = useSelector((state) => state.nowPlaying);

    return (
        <div className="bg-black bg-opacity-900">
            <div className=" -mt-20 relative z-10">
                <MovieList title={"Now Playing"} movies={movies?.nowPlaying} />
                <MovieList title={"Popular"} movies={movies?.popular} />
                <MovieList title={"Top Rated"} movies={movies?.topRated} />
            </div>
        </div>
    );
}

export default SecondaryContainer;