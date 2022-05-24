import { StarIcon } from '@heroicons/react/solid';
import React from 'react';

const Review = ({ review }) => {
    const { name, description, rating,tools

    } = review
  
  
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
           
            <div className="card-body">
                
                <h2 className='text-2xl font-bold text-info'>Tools:{tools}</h2>
                <p>{description
                }</p>
                <p>Rating:{rating
                }<StarIcon className='w-12 h-10 text-yellow-400'></StarIcon></p>
            </div>
        </div>
    );
};

export default Review;