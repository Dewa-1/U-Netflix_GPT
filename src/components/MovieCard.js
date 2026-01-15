import React from "react";
import { CDN_IMAGE_URL } from "../utils/constants";

const MovieCard = ({ posterPath, posterPath2 }) => {
 

  return (
    <div className="min-w-[160px] overflow-hidden rounded-lg">
      <img
        src={posterPath? CDN_IMAGE_URL + posterPath: CDN_IMAGE_URL + posterPath2}
        alt="Poster"
        className="w-full h-60 object-cover hover:scale-150 transition-transform duration-300 cursor-pointer"
      />
    </div>
  );
};

export default MovieCard;
