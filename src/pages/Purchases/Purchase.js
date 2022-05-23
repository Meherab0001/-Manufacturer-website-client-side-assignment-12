import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const [purchase, setPurchase] = useState([])

    const {_id}= useParams()
  

        useEffect(()=>{
            fetch( `http://localhost:5000/tools/${_id}`)
            .then(res => res.json())
            .then(data =>setPurchase(data))
        }
        
        ,[_id])
        


    return (
        <div>
            <h1>this page purchases your product and order{purchase}</h1>

        </div>
    );
};

export default Purchase;