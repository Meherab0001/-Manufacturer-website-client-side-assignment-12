
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const [purchase, setPurchase] = useState([])
    const [total, setTotal] = useState(null)
    const { id: _id } = useParams()
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()


    useEffect(() => {
     
            fetch(`http://localhost:5000/tools/${_id}`, {
                method: "GEt",
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {

                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                        navigate('/')
                    }

                    res.json()
                })
                .then(data => {
                    console.log(data)
                    setPurchase(data)})

      
    }

        , [_id])


    const handlePurchase = event => {
        event.preventDefault()
        const orderPurchase = {
            email: user.email,
            miniumQunatity: purchase.minimum_quantity,
            order: event.target.orderQunatity.value,
            avilabeTools: purchase.quantity,
            orderPirce: purchase.price,

        }

        const miniumOrder = parseFloat(orderPurchase.miniumQunatity)
        const orderNumber = parseFloat(orderPurchase.order)
        const orderPriceUnit = parseFloat(orderPurchase.orderPirce)
        const avilable = parseFloat(orderPurchase.avilabeTools)

        if (orderNumber < miniumOrder || orderNumber > avilable) {

            return toast.error('Make sure your order quantiry')



        }
        else {
            const total = orderNumber * orderPriceUnit
            setTotal(total)
            console.log(total)
            toast.success('order success')
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderPurchase)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })







        /*   console.log(orderPurchase,orderPurchase.orderPirce,orderNumber,orderPriceUnit,avilable)
       */
    }
    return (
        <div class="hero h-screen ">
            <h2></h2>
        <div class="hero-content flex-col lg:flex-row-reverse">
               
                <div>
                    <form onSubmit={handlePurchase}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" name='email' value={user.email} class="input input-bordered" disabled />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Minimu Qunantity:</span>
                            </label>
                            <input type="text" name='minimumQunatity' value={purchase.minimum_quantity} class="input input-bordered" disabled />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Price per Unit:</span>
                            </label>
                            <input type="text" name='price' value={purchase.price} class="input input-bordered" disabled />
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


                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Available Quantity:</span>
                            </label>
                            <input type="number" name='avilable' value={purchase.quantity} class="input input-bordered" />
                        </div>
                        <input

                            type="submit" className='btn btn-secondary' value="Buy Now" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;