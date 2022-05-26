import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import Loading from '../SharedComponent/Loading';
import CheckoutFrom from './CheckoutFrom'
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';
const Payment = () => {
    const stripePromise = loadStripe('pk_test_pk_test_51L3gRiJG15rpMYSm9BEmOmpRDRy3MFaflR7aZcGue7AwXrJg108TqMowwqrBgYfUCqJS7iexvwu8RmQrFbbCbLzj00d7MGDnXs');
    const { id } = useParams()

    const url = `http://localhost:5000/p-order/${id}`
    const { data: payment, isLoading } = useQuery(['payment', id], () =>
        fetch(url, {
            method: "GET",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }

        }).then(res => {
            console.log(res)
            return res.json()
        }))

    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(payment)
    return (
        <div>




            <div class="card w-50 bg-base-100 max-w-md shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Pay for {payment.name}</h2>
                    <p>Address:{payment.location}</p>
                    <h2>Please pay:${payment.total}</h2>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">

                    <Elements stripe={stripePromise}>
                        <CheckoutFrom payment={payment} />
                    </Elements>

                </div>
            </div>
        </div>



    );
};

export default Payment;