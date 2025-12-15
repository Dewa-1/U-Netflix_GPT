import React, { useEffect } from 'react'
import { API_options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/moviesSlice';

const VideoBackground = ({backgroundImage, movieId}) => {
  const dispatch = useDispatch();

  const videotrailerdata = useSelector((store)=>store.movies?.trailerVideo);

  const getMovieVideos = async()=> {    //Yha par hum videos wali API se Trailer fetch kar rhe hn taaki fir show kar ske
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_options);
    const json = await data.json();
    // console.log(json.results);           //yha 4 videos ka array aaega

    const filterData = json.results.filter((video)=>video.type=== "Trailer"); 
    const trailer = filterData.length ? filterData[0]: json.results[0];
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  }

  useEffect(()=> {
    getMovieVideos();
  }, [movieId]);

if (!videotrailerdata) return null;

const {key } = videotrailerdata;
  return (
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
  <div className="absolute top-1/2 left-1/2 w-[120%] -translate-x-1/2 -translate-y-1/2">
    <iframe
      className="w-full h-full aspect-video"
      src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0`}
      title="YouTube video player"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
  </div>

  {/* Dark gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-black"></div>
</div>

  )
}

export default VideoBackground;
