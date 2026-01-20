import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_options } from "../utils/constants";
import VideoBackground from "./VideoBackground";
import Header from "./Header";
import { useSelector } from "react-redux";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const backGptSearch = useSelector((store)=> store.user);
   const gptSearchEnabled = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}`,
        API_options,
      );
      const json = await data.json();
      setMovie(json);
    };

    fetchMovie();
  }, [movieId]);

  if (!movie) return null;

  return (
    <div className="h-full w-screen">
        
      {/* VIDEO SECTION */}
      <div className="relative h-screen">
        {backGptSearch && <button
                onClick={() => window.history.back()}
              className="bg-purple-600 px-4 py-2 text:xs sm:text-sm md:text-base lg:text-lg rounded-md text-white mt-auto mx-2 sm:mx-4 md:mx-8"
            >
              Back
            </button>}
        <VideoBackground movieId={movieId} />

        <div className="absolute bottom-10 left-6 z-20">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            {movie.title}
          </h1>
        </div>
      </div>

      {/* DETAILS SECTION */}
      <div className="bg-black px-6 py-10 text-white">
        <p className="text-lg opacity-80">{movie.overview}</p>

        <div className="mt-4 flex gap-6 opacity-70">
          <span>⭐{Math.floor(movie.vote_average)}</span>
          <span>📅 {movie.release_date}</span>
          <span>🔥 {Math.round(movie.popularity)}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
