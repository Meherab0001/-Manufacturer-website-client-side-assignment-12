import React, { useEffect, useState } from 'react';
import Review from './Review';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Navigation, Pagination, Scrollbar, A11y, EffectCards, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/bundle";
const Reviews = () => {


    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://young-fjord-38482.herokuapp.com/reviews', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const newReview = reviews.reverse()
    console.log(newReview)
    return (
        <div className='my-28'>
            <h2 className='text-3xl text-center text-secondary'>Reveiw Our Customer </h2>


            <div className='text-center mt-5 justify-center items-center'>
                <Swiper className='text-center'
                    modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    centeredSlides={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    effect="cards"
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >

                    {newReview.map(review =>
                        <SwiperSlide className='slide' key={review._id}>
                            <div className='slide-content' >
                                <Review
                                    key={review._id}
                                    review={review}
                                >

                                </Review>
                            </div>
                        </SwiperSlide>
                    )}

                </Swiper>
            </div>

        </div>
    );
};

export default Reviews;

{/*  {newReview.map(review => <Review
                            key={review._id}
                            review={review}
                        >

                        </Review>)} */}