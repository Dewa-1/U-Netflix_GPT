import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GptMovieSuggestion = () => {
  const suggestedMovies = useSelector((store) => store.movies.searchedMovies);

  if (!suggestedMovies) return null; // 5 Array of Array aaega , aur har array me kuch 2-20 movies hongi

  return (
    <div className="p-8 items-center">
      <div className="flex flex-wrap justify-center gap-y-6 items-center gap-x-6 overflow-x-auto no-scrollbar pt-3 bg-black opacity-90 border-2 border-solid border-red-500 py-2 w-full hover:opacity-100 transition-opacity duration-300 rounded-md">
        {suggestedMovies.map(
          (
            movieArray //bda array or arrays
          ) =>
            movieArray
              .filter(
                (movie) =>
                  (movie.posterPath || movie.backdrop_path)
              )
              .map(
                (
                  singleMovie //filtering based on image available
                ) => (
                  <div
                    key={singleMovie.id}
                    className="flex flex-col-reverse  gap-y-5 h-full items-center w-32 sm:w-36 md:w-40 lg:w-44 mb-6 rounded-lg"
                  >
                    {/*  Movie Title */}
                    <h1 className="text-xs sm:text-sm md:text-base lg:text-xl font-semibold text-white text-center mb-2 ">
                      {singleMovie.original_title}
                    </h1>

                    <MovieCard
                      posterPath={singleMovie.poster_path}
                      posterPath2={singleMovie.backdrop_path}
                    />
                  </div>
                )
              )
        )}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
