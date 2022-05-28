import React from 'react';
import { Link } from 'react-router-dom';

const OrderList = ({pOrder,index}) => {
    const {name,minQuantity,total,price,paid,_id}=pOrder

    return (
      
            <tr>
                <th>{index +1}</th>
                <td>{name}</td>
                <td>{minQuantity}</td>
                <td>${price}</td>
                <td>${total}</td>
                <td>{(price && !paid) && <Link to={`/dashboard/order/${_id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}</td>
                <td>{(price && paid) && <span className='btn btn-xs btn-success'>Paid</span>}</td>
                <td><button class="btn btn-xs">Cancel</button></td>
               
            </tr>
       
    );
};

export default OrderList;