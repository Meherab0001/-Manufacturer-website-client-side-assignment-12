import { async } from '@firebase/util';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../SharedComponent/Loading';

const Purchase = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { id: _id } = useParams()
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
    const { data: purchase, isLoading } = useQuery('purchase', () => fetch(`https://young-fjord-38482.herokuapp.com/tools/${_id}`, {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken')
            navigate('/')
        }

        return res.json()

    }))


    const onSubmit = async (data) => {

        const Orderprice = Number(purchase.price)
        const avilableTools = purchase.quantity
        const minOrderQuantity = Number(data.minimum_quantity)

        const total = Orderprice * minOrderQuantity
        const orderPurcashe = {
            name: purchase.name,
            price: purchase.price,
            minQuantity: data.minimum_quantity,
            total,
            email: user.email,
            location: data.location,
        }
        fetch('https://young-fjord-38482.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(orderPurcashe)
        })
            .then((res => {
                console.log(res)

                return res.json()
            }))
            toast.success('Order successfull')
        reset()
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div>
                <img src={purchase.img} alt="" />
                <h2>Minimum:{purchase.minimum_quantity
                }</h2>
                <h2>Available:{purchase.quantity
                }</h2>
                <h2>Price$:{purchase.price}</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Tools Name</span>

                        </label>
                        <input type="text"
                            placeholder="Tools Name"
                            class="input input-bordered w-full max-w-xs"
                            value={purchase.name} disabled
                        />

                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Email</span>

                        </label>
                        <input type="text"
                            placeholder="Tools Name"
                            class="input input-bordered w-full max-w-xs"
                            value={user.email} disabled
                        />

                    </div>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Your Location</span>

                        </label>
                        <input type="text"
                            placeholder="Description product"
                            class="input input-bordered w-full max-w-xs"
                            {...register("location",

                                {

                                    required: {
                                        value: true,
                                        message: 'Your address here'
                                    },

                                }
                            )}
                        />
                        <label class="label">
                        {errors.location?.type === 'required' && <span class="label-text-alt text-red-500">{errors.location.message}</span>}

                        </label>
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Price per unit</span>

                        </label>
                        <input type="number"
                            placeholder="price"
                            class="input input-bordered w-full max-w-xs"
                            value={purchase.price} disabled
                        />

                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Minimum Qunatity</span>

                        </label>
                        <input type="number" min={purchase.minimum_quantity} max={purchase.quantity}

                            placeholder="Minimum Quantity"
                            class="input input-bordered w-full max-w-xs"
                            {...register("minimum_quantity",

                                {

                                    required: {
                                        value: true,
                                        message: 'Please put minimum number'
                                    },

                                }
                            )}
                        />
                        <label class="label">


                        </label>
                    </div>


                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Total Price</span>

                        </label>
                        <input type="number"

                            placeholder="Total price"
                            class="input input-bordered w-full max-w-xs"

                        />
                        <label class="label">
                            {errors.number?.type === 'required' && <span class="label-text-alt text-red-500">{errors.number.message}</span>}

                        </label>
                    </div>
                    <input className='btn  w-full max-w-xs text-white' type="submit" value="Buy Now" />

                </form>
            </div>
        </div>
    );
};

export default Purchase;