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
import GptSearch from './GptSearch';

const Browse = () => {
  const movies = useSelector((store)=> store.movies);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
   
  const gptSearchEnabled = useSelector((store)=> store.gpt.showGptSearch);



return (
  <div className="w-screen min-h-screen">
    <Header />

    {gptSearchEnabled ? (            //Mtlb agr GPT search wala button click hua hai to Header k saath GPT search component dikhana hai
      <GptSearch />
    ) : (
      (!movies.nowPlayingMovies ||       //Uske baad doosra ternary operator lagaya hai jisme mtlb ye hai ki agr abhi tak movies ka data load ni hua to BrowseShimmer dikhana hai
       !movies.popularMovies ||
       !movies.topRatedMovies ||
       !movies.upcomingMovies) ? (
        <BrowseShimmer />
      ) : (                         //Agar movies ka data load ho chuka hai to normal Browse component dikhana hai
        <>         
          <MainContainer />                 
          <SecondaryContainer />
        </>
      )
    )}
  </div>
);
}
export default Browse;


