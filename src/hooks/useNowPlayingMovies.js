import { useDispatch } from "react-redux";
import { API_options } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
    
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {                  //yha se TMDB API se data fetch krke redux me store krwa rhe hain
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_options);
    const jsonData = await data.json();
    dispatch(addNowPlayingMovies(jsonData?.results));    //jo movies ka data aaya wha ab redux me store krwa rhe hain
  
  }

  useEffect(()=> {  //yha se jese component mount hoga wesa hi movies ka data fetch krke redux me store krwa dega
    getNowPlayingMovies();   
  }, [])
}
export default useNowPlayingMovies;