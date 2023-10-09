import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import requestApi from "../../axios";
import { ManyItem } from "..";
import SearchInput from "../Compoment/SearchInput";
import { Footer } from "../Compoment";
const apiUrl = import.meta.env.VITE_SOME_KEY;
const index = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const q = queryParams.get("q");
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);
  useEffect(() => {
    setIsloading(true);
    const fechData = async () => {
      const kq = await requestApi(`movies/search?q=${q}`, "GET", undefined);
      setData(kq);
      setIsloading(false);
    };
    fechData();
  }, [q]);
  const navigation = useNavigate();
  const [textInput, setTextInput] = useState("");
  const [hasChanged, setHasChanged] = useState(false);

  const handleClick2 = () => {
    if (hasChanged) {
      console.log("Search icon clicked", textInput);
      navigation(`/movies/search?q=${textInput}`);
    }
    setHasChanged(false);
  };
  return (
    <>
      <div className="group relative mt-10 min-h-screen ">
        <div className="flex items-center w-full justify-end">
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-10">
            RESULT SEARCH : <span className="text-red-600">{q}</span>
          </h2>
          <SearchInput
            textInput={textInput}
            setTextInput={setTextInput}
            handleClick2={handleClick2}
            setHasChanged={setHasChanged}
          />{" "}
        </div>

        {data.length === 0 ? (
          <h1 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-500 mb-10">
            ko co ket quả{" "}
          </h1>
        ) : (
          <ManyItem
            nameTitle={"Phim được tìm kiếm"}
            data={data}
            isLoading={isLoading}
          />
        )}
      </div>
    </>
  );
};

export default index;
