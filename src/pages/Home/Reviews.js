import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviews',{
            method:'GET'
        })
        .then(res =>res.json())
        .then(data =>setReviews(data))
    },[])
    return (
        <div className='my-28'>
            <h2 className='text-3xl text-center text-secondary'>Reveiw Our Customer </h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
           
           {reviews.map(review =><Review
           key={review._id}
           review={review}
           >

           </Review>)}   
       </div>
        </div>
    );
};

export default Reviews;