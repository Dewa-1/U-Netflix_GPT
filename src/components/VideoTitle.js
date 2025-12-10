import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview, posterImage }) => {
  return (
    <div className="py-36 px-10 w-1/3 ">
      <div className="my-10">
        <img
          className="w-56 bg-gradient-to-b from-black rounded-md border-none outline-none h-28"
          src={`https://image.tmdb.org/t/p/original${posterImage}`}
          alt="Poster"
        />
      </div>

      <h1 className="text-6xl font-bold break-words text-white line-clamp-2">
        {title}
      </h1>
      <div>
        <p className="font-bolder text-lg py-6 text-white  line-clamp-4">
          {overview}
        </p>
      </div>
      <div className="flex gap-4 mt-4">
        {/* Play Button */}
        <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-md font-bold hover:bg-gray-200 transition">
          <FaPlay size={20} />
          Play
        </button>

        {/* More Info Button */}
        <button className="flex items-center gap-2 bg-gray-700 bg-opacity-80 text-white px-6 py-2 rounded-md font-bold hover:bg-gray-600 transition">
          <IoIosInformationCircleOutline size={24} />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
