
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';


import Loading from '../SharedComponent/Loading';
import OrderList from './OrderList';

const MyOrder = () => {
    const [user] = useAuthState(auth)

    const { data: order, isLoading } = useQuery('order', () => fetch(`https://young-fjord-38482.herokuapp.com/order/${user.email}`,{
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Order Number</th>
                            <th>Price Per unit</th>
                            <th>Total Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map((pOrder,index)=><OrderList
                            pOrder={pOrder}
                            key={pOrder._id}
                            index={index}
                            ></OrderList>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;