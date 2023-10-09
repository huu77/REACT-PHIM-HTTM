import { Key, SetStateAction, useEffect, useMemo, useState } from "react";
import Video from "./video";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import Comment from "./comment";
import { Categories, Rating } from "../../Compoment";
import requestApi from "../../../axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ManyItem } from "../..";
const apiUrl = import.meta.env.VITE_SOME_KEY;
const fetchData = async (listGenre: any[], data: { country: any; _id: any; }) => {
  try {
    const genreData = await Promise.all(
      listGenre.map(async (id) => {
        const response:any = await requestApi(`genres/${id}`, "GET", undefined);
        return response.name;
      })
    );

    // Get quoc gia from data
    const quocgia = await requestApi(`countries/${data.country}`, "GET", undefined);

    const listSilimar = await requestApi(`movies/silimarToId/${data._id}`, "GET", undefined);

    return { genreData, quocgia, listSilimar };
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu:", error);
    throw error;
  }
};

const index = ({
  _dataMovie,
  listGenre,
  data,
}: {
  _dataMovie: any;
  listGenre: any;
  data: any;
}) => {
  const [isText, setIsText] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [list, setList] = useState<any>([]);
  const [quocGia, setQuocGia] = useState<any>("");
  const [isLoading, setIsLoading] = useState(false);
  const [listSilimar, setListSilimar] = useState<any>([]);

  const handelLike = () => {
    setIsLike(!isLike);
  };

  // Sử dụng useMemo để lưu trữ giá trị listGenre và data
  const memoizedData = useMemo(() => ({ listGenre, data }), [listGenre, data]);

  useEffect(() => {
    setIsLoading(true);

    // Gọi fetchData chỉ khi listGenre hoặc data thay đổi
    fetchData(memoizedData.listGenre, memoizedData.data)
      .then(({ genreData, quocgia, listSilimar }) => {
        setList(genreData);
        setQuocGia(quocgia.name);
        setListSilimar(listSilimar);
      })
      .catch((error) => {
        console.error("Lỗi khi tải dữ liệu:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [memoizedData]);

  return (
    <div>
      <div className="w-10 h-10"></div>
      {_dataMovie ? (
        // Hiển thị video khi dữ liệu đã tải xong
        <Video videoUrl={`${apiUrl}${_dataMovie?.videoUrl}`} />
      ) : (
        // Hiển thị hình ảnh skeleton khi dữ liệu chưa được tải xong
        <div
          style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}
        >
          <Skeleton
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      )}
      <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-10"></h2>
      <h2
        className={`font-bold text-${
          isLike ? "green" : "blue"
        }-600 cursor-pointer mr-4 flex align-center`}
        onClick={() => handelLike()}
      >
        <ThumbUpIcon className="mr-3" />
        LIKE
      </h2>
      {list ? (
        list?.map((_item: any, index: any) => (
          <button
            key={index}
            className="rounded-lg border-current border-2 px-4 mr-2 mt-2"
          >
            {_item}
          </button>
        ))
      ) : (
        <div className="flex">
          <Skeleton width={40} height={20} />
          <Skeleton width={40} height={20} />
          <Skeleton width={40} height={20} />
          {/* Thêm nhiều skeleton tùy ý cho số tập bạn muốn */}
        </div>
      )}

      <div className="w-full h-auto overflow-hidden">
        {data ? (
          <h2
            className={isText ? "text-ellipsis" : `truncate  `}
            onClick={() => setIsText(!isText)}
          >
            {data?.description}
          </h2>
        ) : (
          <Skeleton width={200} height={24} baseColor="#343541" />
        )}
      </div>

      {/* Quoc gia*/}
      <div className="w-4/5 h-auto overflow-hidden">
        <p className="text-ellipsis text-gray-500">Quoc Gia : {quocGia}</p>
      </div>
      <div>
        <Rating />
      </div>
      <div>
        <h2 className="mt-10 text-xl font-bold leading-9 tracking-tight text-gray-900">
          Comment
        </h2>
        <Comment />
      </div>
      <div>
        <h2 className="mt-10 text-xl font-bold leading-9 tracking-tight text-gray-900">
          TƯƠNG TỰ
        </h2>
        {isLoading &&   <Skeleton height={100} width={200} />}
        <ManyItem nameTitle={""} data={listSilimar} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default index;
