import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../src/assets/images/61636250-conveyor-line-icon-isolated-on-white-production-assembly-line-factory-manufacture.jpg'

const NotFound = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={img} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">This page Not found</h1>
                    <p class="py-6">You may wrong page or this page is moved</p>
                    <Link className='text-xl font-bold text-primary' to='/'>Back to home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;