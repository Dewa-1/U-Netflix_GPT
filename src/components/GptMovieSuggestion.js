import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GptMovieSuggestion = () => {
  const suggestedMovies = useSelector(
    (store) => store.movies.searchedMovies
  );

  if (!suggestedMovies) return null;   // 5 Array of Array aaega , aur har array me kuch 2-20 movies hongi

  return (
    <div className="p-8">
      <div className="flex flex-wrap gap-x-6 overflow-x-auto no-scrollbar pt-3">
        {suggestedMovies.map((movieArray) =>         //bda array or arrays
          movieArray.filter((movie)=> movie.posterPath || movie.backdrop_path).map((singleMovie) => (   //filtering based on image available      
            <div
              key={singleMovie.id}
              className="flex flex-col-reverse gap-y-5 items-center w-40"
            >
              {/*  Movie Title */}
              <h1 className="text-sm font-semibold text-white text-center mb-2 line-clamp-2">
                {singleMovie.original_title}
              </h1>

              <MovieCard posterPath={singleMovie.poster_path} posterPath2={singleMovie.backdrop_path}/>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
