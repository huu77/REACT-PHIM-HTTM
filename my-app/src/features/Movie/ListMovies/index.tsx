import { useState } from "react";
import { Movie, MovieItem } from "../..";

const index = () => {
  const [selectedEpisode, setSelectedEpisode] = useState(1);
  const episodes = ["Tập 1", "Tập 2", "Tập 3", "Tập 4"]; // Dữ liệu tập phim giả lập

  const handleEpisodeChange = (episodeNumber: number) => {
    setSelectedEpisode(episodeNumber);
  };
  return (
    <div className="group relative mt-10 h-full">
      <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-10">
        Highlights | Đừng Nói Dối Em - My Lovely Liar_Độc Quyền TV360
      </h2>
      <div className="relative max-h-3/6 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
        <img
          src={
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
          alt={"test"}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity group-hover:opacity-0">
          <div className="absolute inset-0 flex justify-center items-center text-center ">
            <h3 className="text-white text-xl font-semibold ">
              Title
              <p className="text-white text-sx">Description</p>
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-white text-gray-900 rounded-full px-2 py-1 text-xs ">
        <h2 className="mt-10 text-xl font-bold leading-9 tracking-tight text-gray-900 mb-10">
          Số Tập Phim
        </h2>
        {episodes.map((episode, index) => (
          <button
            key={index}
            className={`ml-2 py-1 px-2 rounded-full hover:bg-gray-200 ${
              selectedEpisode === index + 1 ? "bg-gray-200" : ""
            }`}
            onClick={() => handleEpisodeChange(index + 1)}
          >
            {episode}
          </button>
        ))}
      </div>
      <MovieItem/>
    </div>
  );
};

export default index;
