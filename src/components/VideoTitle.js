import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview, posterImage }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 sm:px-6 lg:px-10 pt-24 sm:pt-28 md:pt-36">
      <div className="hidden sm:block">
        <img
          className="w-40 sm:w-48 md:w-56 bg-gradient-to-b from-black rounded-md border-none outline-none h-auto"
          src={`https://image.tmdb.org/t/p/original${posterImage}`}
          alt="Poster"
        />
      </div>

      <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white line-clamp-3">
        {title}
      </h1>
      <div className="hidden sm:block">
        <p className="font-bolder text-sm sm:text-base md:text-lg py-4 sm:py-6 text-white  line-clamp-3 sm:line-clamp-4">
          {overview}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4"> {/*Mtlb choti screen k liye pehle define kro uske bad badi screen k liye*/}
        {/* Play Button */}
        <button className="flex items-center justify-center gap-2 bg-white text-black px-6 py-2 rounded-md font-bold hover:bg-gray-200 transition">
          <FaPlay size={18} />
          Play
        </button>

        {/* More Info Button */}
        <button className="flex items-center justify-center gap-2 bg-gray-700 bg-opacity-80 text-white px-6 py-2 rounded-md font-bold hover:bg-gray-600 transition">
          <IoIosInformationCircleOutline size={22} />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
