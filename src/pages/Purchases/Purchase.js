import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const [purchase, setPurchase] = useState([])
    const { id: _id } = useParams()
    const [user, loading, error] = useAuthState(auth);
 
    useEffect(() => {
        fetch(`http://localhost:5000/tools/${_id}`)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }

        , [])


    const handlePurchase = event => {
        event.preventDefault()
        const orderPurchase={
            email:user.email,
            miniumQunatity:purchase.minimum_quantity,
          order:event.target.orderQunatity.value,
          avilabeTools:purchase.quantity
        
        
            
            
        }
        console.log(orderPurchase)
      event.value.reset()
    }
    return (
        <div class="hero h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div className='grid '>
                    <img src={purchase.img} alt='Tools' />
                    <h1 className='text-2xl text-info'>{purchase.name}</h1>
                    <h1 className='text-2xl text-info'>Minimum Quantity:{purchase.minimum_quantity}</h1>
                    <h1 className='text-2xl text-info'> Quantity:{purchase.quantity}</h1>
                    <h1 className='text-2xl text-info'>Price:${purchase.price} Per unit.</h1>
                </div>
                <div>
                    <form onSubmit={handlePurchase}>
                        <div class="form-control">
                            <label class="label">
                            <span class="label-text">Email</span>
                            </label>
                            <input type="text" name='email' value={user.email}class="input input-bordered" disabled/>
                        </div>
                        <div class="form-control">
                            <label class="label">
                            <span class="label-text">Minimu Qunantity:</span>
                            </label>
                            <input type="text" name='minimumQunatity' value={purchase.minimum_quantity}class="input input-bordered" disabled/>
                        </div>
                        <div class="form-control">
                            <label class="label">
                            <span class="label-text">Price per Unit:</span>
                            </label>
                            <input type="text" name='price' value={purchase.price}class="input input-bordered" disabled/>
                        </div>
                        <div class="form-control">
                            <label class="label">
                            <span class="label-text">Order Quantity:</span>
                            </label>
                            <input type="number" name='orderQunatity' class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                            <span class="label-text">Total Price:</span>
                            </label>
                            <input type="number" name='totalPrice' class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                            <span class="label-text">Available Quantity:</span>
                            </label>
                            <input type="number" name='avilable' value={purchase.quantity} class="input input-bordered" />
                        </div>
                        <input type="submit" className='btn btn-secondary' value="Buy Now" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;