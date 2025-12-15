const BrowseShimmer = () => {
  return (
    <div className="bg-black min-h-screen text-white pointer-events-none z-0">

      {/* ===== Main Container Shimmer (Hero Section) ===== */}
      <div className="relative h-[80vh] w-full overflow-hidden">

        {/* Video Background Placeholder */}
        <div className="absolute inset-0 bg-gray-700 animate-pulse"></div>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black"></div>

        {/* Title + Description */}
        <div className="relative z-10 pt-[12%] px-12 max-w-2xl space-y-4">
          <div className="w-80 h-10 bg-gray-700 rounded animate-pulse"></div>
          <div className="w-full h-4 bg-gray-700 rounded animate-pulse"></div>
          <div className="w-5/6 h-4 bg-gray-700 rounded animate-pulse"></div>
          <div className="w-2/3 h-4 bg-gray-700 rounded animate-pulse"></div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <div className="w-28 h-10 bg-gray-700 rounded animate-pulse"></div>
            <div className="w-36 h-10 bg-gray-700 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* ===== Secondary Container Shimmer (Movie Rows) ===== */}
      <div className="relative -mt-32 z-20 px-6 space-y-10">

        {[1, 2, 3, 4].map((row) => (
          <div key={row} className="space-y-4">
            {/* Row Title */}
            <div className="w-52 h-6 bg-gray-700 rounded animate-pulse"></div>

            {/* Movie Cards */}
            <div className="flex gap-4 overflow-hidden">
              {[...Array(10)].map((_, index) => (
                <div
                  key={index}
                  className="min-w-[160px] h-60 bg-gray-800 rounded-lg animate-pulse"
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default BrowseShimmer;
