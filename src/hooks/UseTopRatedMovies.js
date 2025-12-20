import { useDispatch } from "react-redux";
import { API_options } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { topRatedJsonData } from "../jsondata/topRated";

const useTopRatedMovies = () => {
    
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {                  //yha se TMDB API se data fetch krke redux me store krwa rhe hain
    // const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_options);
    // const jsonData = await data.json();
    dispatch(addTopRatedMovies(topRatedJsonData?.results));    //jo movies ka data aaya wha ab redux me store krwa rhe hain
  
  }

  useEffect(()=> {  //yha se jese component mount hoga wesa hi movies ka data fetch krke redux me store krwa dega
    getTopRatedMovies();   
  }, [])
}
export default useTopRatedMovies;