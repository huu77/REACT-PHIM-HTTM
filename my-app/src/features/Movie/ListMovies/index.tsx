import { useEffect, useState } from "react";
import { MovieItem } from "../..";
import { useParams } from "react-router-dom";
import requestApi from "../../../axios";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import EpisodeButton from "./EpisodeButton ";

const apiUrl = import.meta.env.VITE_SOME_KEY;
const index = () => {
  const { id } = useParams();

  // State
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedEpisode, setSelectedEpisode] = useState<number>(1);
  const [_dataOfMovie, setDataofMovie] = useState<any[]>([]);
  const [_dataMovie, setDataMovie] = useState<any>({});
  const [listGenre, setListGenre] = useState<any[]>([]);
  const [data, setData] = useState<any>({});

  // Effect to fetch data
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Fetch movie data
        const movieResponse: any = await requestApi(
          `movies/${id}`,
          "GET",
          undefined
        );
        setData({ ...movieResponse });

        // Fetch episode data
        const episodeResponse: any = await requestApi(
          `episodes?movieId=${id}`,
          "GET",
          undefined
        );
        setDataofMovie([...episodeResponse]);
        setDataMovie({ ...episodeResponse[0] });

        // Set genres
        setListGenre(movieResponse.genres);

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error, e.g., show an error message to the user
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]); 

  // Handle episode change
  const handleEpisodeChange = (episodeNumber: number) => {
    setSelectedEpisode(episodeNumber);
    if (_dataOfMovie[episodeNumber - 1]) {
      setDataMovie({ ..._dataOfMovie[episodeNumber - 1] });
    }
  };

  return (
    <div className="group relative mt-10 h-full">
      {data.title ? (
        <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-10">
          {data.title}
        </h2>
      ) : (
        // Hiển thị skeleton khi data.title không có giá trị
        <Skeleton width={200} height={24} baseColor="#343541" />
      )}
      <div className="relative max-h-3/6 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
        <img
          src={`${apiUrl}/${data.posterUrl}`}
          alt={"test"}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity group-hover:opacity-0">
          <div className="absolute inset-0 flex justify-center items-center text-center ">
            <h3 className="text-white text-xl font-semibold ">{data?.title}</h3>
          </div>
        </div>
      </div>
      <div className="bg-white text-gray-900 rounded-full px-2 py-1 text-xs ">
        <h2 className="mt-10 text-xl font-bold leading-9 tracking-tight text-gray-900 mb-10">
          Số Tập Phim
        </h2>

        {isLoading && (
          // Hiển thị skeleton khi dữ liệu đang được tải
          <div className="flex">
            <Skeleton width={40} height={20} />
            <Skeleton width={40} height={20} />
            <Skeleton width={40} height={20} />
            {/* Thêm nhiều skeleton tùy ý cho số tập bạn muốn */}
          </div>
        )}
        {_dataOfMovie.map((_: any, index: any) => (
          <EpisodeButton
            key={index}
            index={index}
            selectedEpisode={selectedEpisode}
            handleEpisodeChange={handleEpisodeChange}
          />
        ))}
      </div>
      <MovieItem _dataMovie={_dataMovie} listGenre={listGenre} data={data} />
    </div>
  );
};

export default index;
