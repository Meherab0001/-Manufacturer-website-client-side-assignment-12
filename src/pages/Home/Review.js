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
                <p>Rating:
                </p>
                <div className='flex'>
                <StarIcon className='w-12 h-10 text-yellow-400'></StarIcon>
                <StarIcon className='w-12 h-10 text-yellow-400'></StarIcon>
                <StarIcon className='w-12 h-10 text-yellow-400'></StarIcon>
                <StarIcon className='w-12 h-10 text-yellow-400'></StarIcon>
                </div>
                <div>
                    <p className='text-xs font-bold text-success'>Reviw by:{name}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;