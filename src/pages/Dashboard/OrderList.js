import React from 'react';

const OrderList = ({pOrder,index}) => {
    const {name,minQuantity,total,price}=pOrder

    return (
      
            <tr>
                <th>{index +1}</th>
                <td>{name}</td>
                <td>{minQuantity}</td>
                <td>${price}</td>
                <td>${total}</td>
                <td><button class="btn btn-xs">Pay</button></td>
                <td><button class="btn btn-xs">Cancel</button></td>
            </tr>
       
    );
};

export default OrderList;