import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { listMovies } from "../../../redux/slice/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/reducer";
import Skeleton from 'react-loading-skeleton';
const apiUrl = import.meta.env.VITE_SOME_KEY;
interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  beforeChange: (current: number, next: number) => void;
}
export interface movieInterface {
  nameTitle: string;
  number: number;
}
const SlideComponent = ({ nameTitle, number }: movieInterface) => {
  const [activeSlide, setActiveSlide] = useState<number | null>(null);
  const dispatch = useDispatch();
  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: number,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current: number, next: number) => {
      // Trước khi chuyển slide, set activeSlide thành slide tiếp theo
      setActiveSlide(next);
    },
  };

  useEffect(() => {
    dispatch(listMovies());
  }, [dispatch]);
  const { movies, loading }: { movies: any; loading: boolean } = useSelector(
    (state: RootState) => ({
      movies: state.movies.movies, // Adjust the path to the movies state as needed
      loading: state.movies.loading,
    })
  );
  return (
    <div className="bg-gray-100 mt-5  ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-2  ">
          <h2 className="text-2xl font-bold text-gray-900">{nameTitle}</h2>
          <Slider {...settings} className="">
          {loading
          ? Array.from({ length: 5 }).map((_item, index) => (
              <div className="relative w-80 h-72 rounded-2xl mx-2 p-1 mx-10" key={index}>
                {/* Render the loading skeleton */}
                <Skeleton height={200} width={320} />
              </div>
            ))
          : movies.slice(5).map((_item: any, index: any) => (
              <div className="relative w-80 h-72 rounded-2xl mx-2 p-1 mx-10" key={index}>
                <img
                  className="w-full h-full object-cover"
                  src={`${apiUrl}${_item?.posterUrl}`}
                  alt="Slide 1"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity hover:opacity-100">
                  <p className="text-lg text-center">{_item.title}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SlideComponent;
 