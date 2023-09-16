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
  beforeChange:(current: number, next: number)=>void
}

const SlideComponent: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number | null>(null);

  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current: number, next: number) => {
      // Trước khi chuyển slide, set activeSlide thành slide tiếp theo
      setActiveSlide(next);
    },
  };

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <Slider {...settings} className="">
            <div
              className={`w-96 h-72 rounded-2xl overflow-hidden mx-2 p-1  ${
                activeSlide === 0 ? '' : ''
              }`}
            >
              <img
                className="w-full h-full object-cover"
                src="https://www.elleman.vn/wp-content/uploads/2019/05/07/phim-dien-anh-he-2019-elle-man-1-475x327.jpg"
                alt="Slide 1"
              />
            </div>
            <div
              className={`w-96 h-72 rounded-2xl overflow-hidden mx-2 p-1  ${
                activeSlide === 1 ? '' : ''
              }`}
            >
              <img
                className="w-full h-full object-cover"
                src="https://www.elleman.vn/wp-content/uploads/2019/05/07/phim-dien-anh-he-2019-elle-man-1-475x327.jpg"
                alt="Slide 2"
              />
            </div>
            <div
              className={`w-96 h-72 rounded-2xl overflow-hidden mx-2 p-1  ${
                activeSlide === 2 ? '' : ''
              }`}
            >
              <img
                className="w-full h-full object-cover"
                src="https://www.elleman.vn/wp-content/uploads/2019/05/07/phim-dien-anh-he-2019-elle-man-1-475x327.jpg"
                alt="Slide 3"
              />
            </div>
            <div
              className={`w-96 h-72 rounded-2xl overflow-hidden mx-2 p-1  ${
                activeSlide === 3 ? '' : ''
              }`}
            >
              <img
                className="w-full h-full object-cover"
                src="https://www.elleman.vn/wp-content/uploads/2019/05/07/phim-dien-anh-he-2019-elle-man-1-475x327.jpg"
                alt="Slide 4"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SlideComponent;
