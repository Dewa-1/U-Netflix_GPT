import React from 'react'
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import BrowseShimmer from './BrowseShimmer';

const GptMovieSuggestion = () => {

  const sugestedMovies = useSelector((store)=> store.movies.searchedMovies);    //Redux store se data lekar aur moviesList ki trh isko bhi show krwa denge
  
  
  return (
 <div className='p-8'>
  <h1 className="text-xl font-bold text-white">
        Suggested Movies
      </h1>
    <div className='flex justify-start gap-x-4 gap-y-6 overflow-x-auto no-scrollbar pt-6 shadow-lg rounded-lg'>   
   {sugestedMovies?.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
          />
        ))}
   </div>
 </div>
  )
}

export default GptMovieSuggestion;
