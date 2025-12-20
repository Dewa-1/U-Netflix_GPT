import React from 'react'
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const GptMovieSuggestion = () => {

  const suggestedMovies = useSelector((store)=> store.movies.searchedMovies);    //Redux store se yha 5 Array of Arrays milenge



  
  
  return (
 <div className='p-8'>
  <h1 className="text-xl font-bold text-white">
        Suggested Movies
      </h1>
    <div className='flex justify-start gap-x-4 gap-y-6 overflow-x-auto no-scrollbar pt-6 shadow-lg rounded-lg'>   
   {suggestedMovies?.map((movieArray) => (
        movieArray.map((singleMovie)=> (
             <MovieCard
            key={singleMovie.id}
            posterPath={singleMovie.poster_path}
          />
        ))
        ))}
   </div>
 </div>
  )
}

export default GptMovieSuggestion;
