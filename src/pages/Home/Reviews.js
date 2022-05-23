import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [review,setReviews]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviews',{
            method:'GET'
        })
        .then(res =>res.json())
        .then(data =>setReviews(data))
    },[])
    return (
        <div>
            <h1>THis section for review from customer:{review.length}</h1>
        </div>
    );
};

export default Reviews;