import { useEffect, useState } from "react";
import requestApi from "../../../axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ManyItem } from "../..";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/reducer";
import { fetchGenres } from "../../../redux/slice/genresSlice";
const Index = () => {
  const dispatch = useDispatch();

  // Use Redux store to manage genres and loading state
  const { items, isLoading }: { items: any; isLoading: any } =
    useSelector((state: RootState) => ({
      items: state.genres.items,
      isLoading: state.genres.isLoading,
    }));

    const [itemSelect, setItemSelect] = useState<any>([]);
  // useEffect to fetch genres when the component mounts
  useEffect(() => {
    // Dispatch the fetchGenres action
    dispatch(fetchGenres());
    const fetchData = async () => {
      const kq = await requestApi(
        `movies/genres/${items[0]._id}`,
        "GET",
        undefined
      );
      setItemSelect(kq); 
    }
    fetchData()
  }, [dispatch]);
  const handleOnclick = async (item: any) => {
    const listItemTogenres = await requestApi(
      `movies/genres/${item._id}`,
      "GET",
      undefined
    );

    setItemSelect(listItemTogenres);
  };

  return (
    <>
      <div className="w-full flex items-center justify-center mb-10 ">
        <div className="w-full min-h-screen ">

          <div className="mt-20 w-full h-10"></div>

          <div className="flex w-11/12 justify-center items-center">
            {isLoading
              ? items.map((_, index) => (
                  <div key={index} className="w-10">
                    <Skeleton width={40} height={20} />
                  </div>
                ))
              : items.map((item, index) => (
                  <div
                    key={index}
                    className="w-20 hover:text-red-500 cursor-pointer mx-5"
                    onClick={() => handleOnclick(item)}
                  >
                    <span className="font-bold ">{item?.name}</span>
                  </div>
                ))}
          </div>
          <ManyItem nameTitle={"Phim Đề Xuất"} data={itemSelect} isLoading={isLoading}/>
        </div>
      </div>

      {/* <Categories nameTitle={"PHIM"} /> */}
     
    </>
  );
};

export default Index;
