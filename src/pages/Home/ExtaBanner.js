import React from 'react';
import img from '../../assets/images/fisker-e-motion_1614226600276_1614226613462.webp'
const ExtaBanner = () => {
    return (
        <div className='my-12'>
            <div class="card lg:card-side ">
                <figure><img src={img} alt="Album"/></figure>
                <div class="card-body">
                    <h2 class="card-title text-violet-600">Wow! Make your car Easy</h2>
                    <p className='text-orange-300'>Make sure your car all parts and safe journey to your whole life.
                    
                    </p>
                    <p className='font-serif text-xl text-success uppercase'>safe your journey ,safe your life</p>
                   
                </div>
            </div>
        </div>
    );
};

export default ExtaBanner;