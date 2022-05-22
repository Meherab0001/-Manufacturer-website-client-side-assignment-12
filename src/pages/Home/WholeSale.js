import React from 'react';
import bgImg from '../../assets/images/He67f6e10a80b42adb57fbd212fec2e30k.jpg'
import { ArrowNarrowRightIcon, } from '@heroicons/react/solid'

const WholeSale = () => {
    return (
        <div class="card lg:w-max  image-full">
            <figure><img src={bgImg} alt="" /></figure>
            <div className='card-body justify-center items-center'>
                <h1 className='text-5xl font-bold'>Wholesale Discount Every Day</h1>
                <h1 className='text-3xl font-bold text-success'>Save 15%-20% when you buy our product</h1>
                <button class="btn btn-outline btn-warning">Wholesale Request
              <ArrowNarrowRightIcon className='w-5 h-5'></ArrowNarrowRightIcon>
                </button>
            </div>

        </div>
    );
};

export default WholeSale;