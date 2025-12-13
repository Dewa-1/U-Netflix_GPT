import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store)=> store.movies?.nowPlayingMovies);
  if(!movies) return;
  return (
    <div className='bg-black bg-gradient-to-t from-black/80 to-black/20'>
      <MovieList title={"Now Playing"} movieData={movies} />
    </div>
  )
}

export default SecondaryContainer;
