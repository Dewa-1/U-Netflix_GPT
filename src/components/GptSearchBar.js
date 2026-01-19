import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import toast from "react-hot-toast";
import { API_options } from "../utils/constants";
import { addSearchedMovies, startSearchedLoading } from "../utils/moviesSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);

  const dispatch = useDispatch();

  const selectedLang = useSelector((store) => store.language.selectedLanguage); //yha se hum seleceted language le rhe hn for example "en", "hindi" aaega value aaegi

 const searchMovieTMDB = async(movie)=> {
  const tmdbData  = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_options);
  const tmdbResponse = await tmdbData.json();
  return tmdbResponse.results;
  
 }


  const handleGptSearchClick = async () => {
    if (!searchText.current.value) return;
     
    dispatch(startSearchedLoading());


    const toastId = toast.loading("Fetching Movie Recommendations...");  //TLoading toast dikhega jab tak data load ho rha hai

    
    // 


    const prompt = `
Recommend exactly 5 movies based on this input:
"${searchText.current.value}"

Rules:
- Only movie names
- No explanations
- No numbering
- Output MUST be a valid JSON array of strings
`;

    try {
      const response = await openai.responses.create({
        //openAI se API fetch krne ka tareeka thoda alag hai yha par
        model: "gpt-5-nano", // cheap + fast           //konsa model select kr rhe ho
        input: prompt, //jo prompt humne bnaya taaki hum kesa response chahte hn
      });

      const resultText = response.output_text;
      const moviesListGPT = JSON.parse(resultText); //yha par humne JSON.parse kiya kyunki humne prompt me bola tha ki output ek valid JSON array hona chahiye

      // console.log("Recommended Movies:", moviesListGPT);      //Array of movies aaega yha
      // Example: ["Inception", "Tenet", "Looper", "Source Code", "Predestination"]

        const PromiseMovieArray = moviesListGPT.map((movie)=> searchMovieTMDB(movie));  //har ek movie jo gpt se aayi hai usko tmdb me search kiya
        const FinalMoviesList =  await Promise.all(PromiseMovieArray); 
        // console.log(FinalMoviesList);    // 5 Array of Array aaega , aur har array me kuch 10-20 movies hongi
        dispatch(addSearchedMovies(FinalMoviesList)); 
        
        toast.success("Movies ready 🎬", { id: toastId,
          duration: 3000
         });
    }  

 
    catch (error) {
      toast.error("Something went wrong. Please try again.", {
        icon: "⚠️",
        duration: 3000,
  });
    }

   
                            //5 movies so  five calls in TMDB AP movies search
                            //Array of 5 promises aaegi yha [Promise, Promise, Promise, Promise, Promise]
               //important: 5 call hongi aur har ek independent hai to wait krengi nhi. To Promise.All settled lga denge to saari  API'S se data aaega aur shi rhega







  };

  return (
    <div className="pt-14 sm:pt-16 md:pt-20 lg:pt-24 flex items-center justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black bg-gradient-to-tr from-black rounded-lg p-2 flex items-center border-2 border-white border-solid mt-7 sm:mt-10 md:mt-14 lg:mt-16"
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[selectedLang].gptSearchPlaceholder}        //yha redux store se ex:- "en" liya to languageConstants se search or gptPlaceholder yha par implement kr dengew
          className="w-32 sm:w-52 md:w-72 lg:w-96  bg-black text-xs sm:text-sm md:text-base lg:text-lg text-white rounded-lg mx-2 sm:mx-3 md:mx-4 px-5 "
        />
        <button
          onClick={handleGptSearchClick}
          className="bg-red-600 px-4 py-2 rounded-lg text-white mt-2"
        >
          {lang[selectedLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
