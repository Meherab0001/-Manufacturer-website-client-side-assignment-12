import React, { useEffect, useState } from 'react';
import Parts from './Parts'

const Tools = () => {
    const [tools,setTools]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/tools',{
            method:'GET',
        })
        .then(res =>res.json())
        .then(data =>setTools(data))
        
    },[])


   
    return (
        <div className='my-28'>
            <h2 className='text-4xl font-bold text-primary text-center'>Our Available Parts</h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-10'>
                {
                    tools.map(parts =><Parts
                        key={parts._id}
                        parts={parts}
                    ></Parts>)
                }
            </div>
        </div>
    );
};

export default Tools;