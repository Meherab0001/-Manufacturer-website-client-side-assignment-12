import React, { useEffect, useState } from 'react';
import Parts from './Parts'

const Tools = () => {
    const [tools,setTools]=useState([])

    useEffect(()=>{
        fetch('https://young-fjord-38482.herokuapp.com/tools',{
            method:'GET',
            headers:{
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
              }
        })
        .then(res =>res.json())
        .then(data =>setTools(data))
        
    },[])


   
    return (
        <div className='my-28'>
            <h2 className='text-4xl font-bold text-primary text-center'>Our Available Parts</h2>
            <div className='grid lg:grid-cols-3 mt-5 sm:grid-cols-1 gap-10'>
                {
                    tools.reverse().map(parts =><Parts
                        key={parts._id}
                        parts={parts}
                    ></Parts>)
                }
            </div>
        </div>
    );
};

export default Tools;