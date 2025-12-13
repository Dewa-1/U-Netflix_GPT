import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movieData, title }) => {
  return (
    <div className="p-8">
      <h1 className="text-xl font-bold text-white mb-3">
        {title}
      </h1>

      <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
        {movieData?.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
