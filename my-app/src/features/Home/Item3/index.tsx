import React, { useEffect, useState } from 'react'
import { Categories, SlideComponent } from '../../Compoment'
import { ManyItem } from '../..'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import requestApi from '../../../axios';


const index = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow:3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    
    };
    const [items, setItems] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await requestApi('genres', 'GET', undefined);
          const itemNames = response.map((item: { name: any; }) => item.name);
          setItems(itemNames); // Update the state with the mapped data
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

 console.log(items);
 
    return (
        <>
            <div className='w-full flex items-center justify-center mb-10'>
                <div className='w-3/5'>
                    <div className='mt-20 w-full h-10'></div>

                    <Slider {...settings}>
                        {items.map((item, index) => (
                            <div key={index} className='w-10'>
                                <p className='font-bold'>{item}</p>
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
