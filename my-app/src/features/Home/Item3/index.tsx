import React from 'react'
import { Categories, SlideComponent } from '../../Compoment'
import { ManyItem } from '../..'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const index = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        beforeChange: (current: number, next: number) => {

        },
    };

    const items = ["Phim hay", "Phim vui", "Phim mới", "Phim hành động", "Phim kinh dị", "Phim hay", "Phim vui", "Phim mới", "Phim hành động", "Phim kinh dị"];

    return (
        <>
            <div className='w-full flex items-center justify-center mb-10'>
                <div className='w-3/5'>
                    <div className='mt-20 w-full h-10'></div>

                    <Slider {...settings}>
                        {items.map((item, index) => (
                            <div key={index} className='w-10'>
                                <p className='font-bold'>{item} </p>
                            </div>
                        ))}

                    </Slider>

                </div>

            </div>
            
            <SlideComponent nameTitle={'Phim Đề Xuất'} number={4} />
            <SlideComponent nameTitle={'Phim Đề Xuất'} number={4} />
            <SlideComponent nameTitle={'Phim Đề Xuất'} number={4} />
            <SlideComponent nameTitle={'Phim Đề Xuất'} number={4} />
             
        </>
    )
}

export default index
