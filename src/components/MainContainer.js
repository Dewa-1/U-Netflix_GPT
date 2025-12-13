import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

    const movies = useSelector((store)=> store.movies?.nowPlayingMovies);

    if(!movies) return;
    
    const randomIndex = Math.floor(Math.random() * movies?.length);
    const randomMainMovie = movies ? movies[randomIndex] : movies[0];  //mtlb jo bhi movie isme aaegi uska saara data isme aa jaega
    // console.log("Random Main Movie in MainContainer:", randomMainMovie);

    const{original_title, backdrop_path,poster_path, overview, id} = randomMainMovie;    

  return (
    <div className='flex items-center h-full relative'>
      <VideoTitle title={original_title} overview={overview} posterImage={poster_path} />
      <VideoBackground backgroundImage={backdrop_path} movieId={id}   />
    </div>
  )
}

export default MainContainer;
