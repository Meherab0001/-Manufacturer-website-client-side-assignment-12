import React, { useEffect, useState } from 'react';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { type } from '@testing-library/user-event/dist/type';
const CheckoutFrom = ({payment}) => {
    const stripe = useStripe();
    const [cardError,setCardError]=useState('')
    const [success, setSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const elements = useElements();
    const {total}=payment

    useEffect(()=>{
        fetch('https://young-fjord-38482.herokuapp.com/create-paymetn-intent',{
            method:'POST',
            headers: {
                'content-type':'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify({total})
        })
        .then(res=>res.json())
        .then(data =>{
            if(data?.clientSecret){
                setClientSecret(data.clientSecret)
            }
        })
    },[total])


    const handleSubmit = async (event) => {
        event.preventDefault();


        if (!elements || !stripe) {
            return;
        }

        const card = elements.getElement(CardElement)

        if (card == null) {
            return;
        }
        const {error,paymentMethod}=await stripe.createPaymentMethod({
            type:'card',
            card,
        })
   
           setCardError(error?.message || '')
      
       
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
            <button className='btn btn-success btn-sm mt-4' disabled={!stripe || !clientSecret} >
                Pay
            </button>
        </form>
{
    cardError && <p className='text-red-500'>{cardError}</p>
}
     </>
    );
};

export default CheckoutFrom;