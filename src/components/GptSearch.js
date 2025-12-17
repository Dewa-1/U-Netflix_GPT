import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
const GptSearch = () => {
  return (
    <div >
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6fd9d446-cd78-453a-8c9c-417ed3e00422/web/IN-en-20251117-TRIFECTA-perspective_2fe4e381-977f-49fd-a7f4-1da0bcf09429_large.jpg"
        alt=""
        className="absolute top-0 left-0 w-full h-full -z-50 bg-black bg-opacity-95 flex flex-col items-center"
      />

      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
