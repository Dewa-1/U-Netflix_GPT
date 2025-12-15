import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/UseTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import BrowseShimmer from './BrowseShimmer';

const Browse = () => {
  const movies = useSelector((store)=> store.movies);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();


  // if (!movies.nowPlayingMovies || !movies.popularMovies || !movies.topRatedMovies || !movies.upcomingMovies) {
  //   return (<>
  //    <Header />
  //   <BrowseShimmer /></>);
  // }
  
  return (
    <div className='w-screen h-screen'>
      <Header />
      {(!movies.nowPlayingMovies || !movies.popularMovies || !movies.topRatedMovies || !movies.upcomingMovies) ? <BrowseShimmer /> : <>
      <MainContainer />
      <SecondaryContainer />
      </>}

      {
        /*
        - Main Container
          - Video Background
          - Video Title 

        - Secondary Container
           - MoviesList * n
             - cards * n
        
        */
      }
       
    </div>
  )
}

export default Browse;
