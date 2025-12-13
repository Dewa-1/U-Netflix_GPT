import React from "react";
import { CDN_IMAGE_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="min-w-[160px] overflow-hidden rounded-lg">
      <img
        src={CDN_IMAGE_URL + posterPath}
        alt="Poster"
        className="w-full h-60 object-cover hover:scale-150 transition-transform duration-300"
      />
    </div>
  );
};

export default MovieCard;
