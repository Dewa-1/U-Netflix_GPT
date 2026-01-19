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
  // const movies = useSelector((store)=> store.movies);
  const allmovieFetchStatus = useSelector((store)=> store.movies.isLoading); //mtlb yha agar true hai to movies abhi poori aayi nhi hain

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
   
  const gptSearchEnabled = useSelector((store)=> store.gpt.showGptSearch);



return (
  <div className="w-full min-h-full">
    <Header />

    {gptSearchEnabled ? (            //Mtlb agr GPT search wala button click hua hai to Header k saath GPT search component dikhana hai
      <GptSearch />                  //kyunki allmovieFetchStatus true hai to mtlb abhi tak movies ka data load ni hua hai to BrowseShimmer dikhana hai
                                      //agr abhi tak movies ka data load ni hua hai to shimmer dikhana hai
                                      //kyunki ab movies ka data load ho chuka hai to ab MainContainer and SecondaryContainer dikhana hai
    ) : allmovieFetchStatus ? <BrowseShimmer /> : <>       
  <MainContainer />                                                          
  <SecondaryContainer />
    </> }
  </div>
);
}
export default Browse;


