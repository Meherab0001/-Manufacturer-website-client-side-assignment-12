import React, { useEffect, useState } from 'react';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
const CheckoutFrom = ({ payment }) => {
    const stripe = useStripe();

    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const elements = useElements();
    const { total, name, email } = payment

    useEffect(() => {
        fetch('https://young-fjord-38482.herokuapp.com/create-paymetn-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ total })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [total])


    const handleSubmit = async (event) => {
        event.preventDefault();


        if (!elements || !stripe) {
            return;
        }

        const card = elements.getElement(CardElement)

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        setCardError(error?.message || '')
        setSuccess("")
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email,
                    },
                },
            },
        );
        if(intentError){
            setCardError(intentError?.message )
            success('')
        }else{
            setCardError('')
            console.log(paymentIntent)
            setSuccess('Congrats! Your payment is compeleted')
        }

    }
    return (

        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-4' >
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <p className='text-green-500'>{success}</p>
            }
        </>
    );
};

export default CheckoutFrom;