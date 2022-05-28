import React from 'react';
import img from '../../assets/images/istockphoto-596780762-612x612.jpg'
const Banner = () => {
    return (
        <div class="hero min-h-screen " 
        style={{
            background: `url(${img})`,
            backgroundSize: 'cover'
        
        }}
        >
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Well come to Our Car Manufactureing </h1>
                    <p class="mb-5"> We Provide Best Tools in the morder world.Specific every tools here our stock.
                    Just wait for your whole </p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;