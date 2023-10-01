import { Key, useEffect, useState } from "react";
import { MovieItem } from "../..";
import { useParams } from "react-router-dom";
import requestApi from "../../../axios";
const apiUrl = import.meta.env.VITE_SOME_KEY;
const index = () => {
  const [selectedEpisode, setSelectedEpisode] = useState(1);
  // get movie from id movies
  const [_dataOfMovie, setDataofMovie] = useState<any>([]);
  // truyen sang item movie
  const [_dataMovie,setDataMovie]=useState<any>({})

  const handleEpisodeChange = (episodeNumber: number) => {
    setSelectedEpisode(episodeNumber);
    if (_dataOfMovie[episodeNumber - 1]) {
      setDataMovie({..._dataOfMovie[episodeNumber - 1]})
    }
     
    
  };
  const { id } = useParams();
  const [data, setData] = useState<any>({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: any = await requestApi(
          `movies/${id}`,
          "GET",
          undefined
        );
        setData({...response});
        const result:any= await requestApi(`episodes?movieId=${id}`,"GET",undefined)
        setDataofMovie([...result])
        setDataMovie({...result[0]})
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error, e.g., show an error message to the user
      }
    };

    fetchData();
  }, []);
 
  return (
    <div className="group relative mt-10 h-full">
      <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-10">
        {data?.title}
      </h2>
      <div className="relative max-h-3/6 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
        <img
          src={
            `${apiUrl}/${data.posterUrl}`
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
        {_dataOfMovie.map((_: any, index: any) => (
          <button
            key={index}
            className={`ml-2 py-1 px-2 rounded-full hover:bg-gray-200 ${
              selectedEpisode === index + 1 ? "bg-gray-200" : ""
            }`}
            onClick={() => handleEpisodeChange(index + 1)}
          >
            Tập {index + 1}
          </button>
        ))}
       
      </div>
      <MovieItem 
       _dataMovie={_dataMovie}
       />
    </div>
  );
};

export default index;
