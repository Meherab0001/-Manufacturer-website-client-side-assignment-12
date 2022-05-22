import {  ShoppingCartIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Parts = ({parts}) => {
    const {img,name,description,quantity,price}=parts
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Available Quaintity:{quantity}</p>
                    <p>Price:${price} per unit</p>
                    <div class="card-actions justify-center">
                       <Link to='/purchase'> <button class="btn btn-primary"><ShoppingCartIcon className='w-12 h-10'></ShoppingCartIcon>purchase Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Parts;