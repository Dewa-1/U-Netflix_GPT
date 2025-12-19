import React from 'react'
import { useSelector } from 'react-redux';

const GptMovieSuggestion = () => {

  const movies = useSelector((store)=> store.movies.searchedMovies);
  
  return (
    <div className='flex items-center justify-center mt-5 text-white bg-black bg-gradient-to-t from-black/80 to-black/20 opacity-80'>
        Welcome to the Suggestion List
    </div>
  )
}

export default GptMovieSuggestion;
