import { ChartPieIcon, FlagIcon, ThumbUpIcon, UserGroupIcon } from '@heroicons/react/solid';
import React from 'react';


import bgImg from '../../assets/inocs/images.jpg'

const BussinessSummary = () => {
    return (
        <div className='w-full my-28 '
            style={{
                background: `url(${bgImg})`,
                backgroundSize: 'cover'
            }}

        >
            <div className='min-h-screen'>
                <div className='text-center flex-wrap mt-3'>
                    <h1 className='text-4xl text-primary font-bold  mt-5'>Manufacturer’s high end manufacturing services are a perfect complement to today’s high tech industries.</h1>
                </div>
                <div className='text-center mx-12 my-40 grid lg:grid-cols-4 sm:grid-cols-1 gap-10'>
                    <div className='flex items-center justify-center flex-col'>
                        <h3 ><FlagIcon className='w-12 h-10'></FlagIcon></h3>
                        <h1 className='text-5xl'>100+</h1>
                        <h3 className='text-3xl text-orange-600'>Country</h3>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <h3 ><ChartPieIcon className='w-12 h-10'></ChartPieIcon></h3>
                        <h1 className='text-5xl'>10000+</h1>
                        <h3 className='text-3xl text-blue-600'>Total Sales</h3>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <h3 ><UserGroupIcon className='w-12 h-10'></UserGroupIcon></h3>
                        <h1 className='text-5xl'>278+</h1>
                        <h3 className='text-3xl text-fuchsia-500'>Happy Clients</h3>
                    </div>
                 
                    <div className='flex items-center justify-center flex-col'>
                        <h3 ><ThumbUpIcon className='w-12 h-10'></ThumbUpIcon></h3>
                        <h1 className='text-5xl'>158+</h1>
                        <h3 className='text-3xl text-teal-600'>Reviews</h3>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default BussinessSummary;