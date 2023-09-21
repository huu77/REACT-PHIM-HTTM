import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  beforeChange: (current: number, next: number) => void
}
export interface movieInterface{
  nameTitle:string,
  number:number
}
const SlideComponent = ({nameTitle,number}:movieInterface) => {
  const [activeSlide, setActiveSlide] = useState<number | null>(null);

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

  return (
    <div className="bg-gray-100 mt-5  ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-2  ">
        <h2 className="text-2xl font-bold text-gray-900">{nameTitle}</h2>
          <Slider {...settings} className="">
             
            <div
              className={`w-80 h-72 rounded-2xl mx-2 p-1 mx-10}`}
            >
              <img
                className="w-full h-full object-cover"
                src="https://www.elleman.vn/wp-content/uploads/2019/05/07/phim-dien-anh-he-2019-elle-man-1-475x327.jpg"
                alt="Slide 1"
              />
            </div>
            <div
              className={`w-80 h-72 rounded-2xl mx-2 p-1 mx-10}`}
            >
              <img
                className="w-full h-full object-cover"
                src="https://www.elleman.vn/wp-content/uploads/2019/05/07/phim-dien-anh-he-2019-elle-man-1-475x327.jpg"
                alt="Slide 1"
              />
            </div>
            <div
              className={`w-80 h-72 rounded-2xl mx-2 p-1 mx-10}`}
            >
              <img
                className="w-full h-full object-cover"
                src="https://www.elleman.vn/wp-content/uploads/2019/05/07/phim-dien-anh-he-2019-elle-man-1-475x327.jpg"
                alt="Slide 1"
              />
            </div>
            <div
              className={`w-80 h-72 rounded-2xl mx-2 p-1 mx-10}`}
            >
              <img
                className="w-full h-full object-cover"
                src="https://www.elleman.vn/wp-content/uploads/2019/05/07/phim-dien-anh-he-2019-elle-man-1-475x327.jpg"
                alt="Slide 1"
              />
            </div>
            <div
              className={`w-80 h-72 rounded-2xl mx-2 p-1 mx-10}`}
            >
              <img
                className="w-full h-full object-cover"
                src="https://www.elleman.vn/wp-content/uploads/2019/05/07/phim-dien-anh-he-2019-elle-man-1-475x327.jpg"
                alt="Slide 1"
              />
            </div>
          </Slider>

        </div>
      </div>
    </div>
  );
};

export default SlideComponent;
