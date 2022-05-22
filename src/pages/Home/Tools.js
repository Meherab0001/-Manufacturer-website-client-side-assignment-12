import React from 'react';
import Transmission from '../../assets/images/Automatic_transmission_cut.jpg'
import Radiato from '../../assets/images/Automobile_radiator.jpg'
import Piston from '../../assets/images/download (2).jpg'
import Parts from './Parts';
/* import Transmission from 'https://i.ibb.co/R0n2Zjw/Automatic-transmission-cut.jpg'
import Radiato from 'https://i.ibb.co/DpRTN4P/Automobile-radiator.jpg'
import Piston from 'https://i.ibb.co/2NNT6Bj/download-2.jpg'
import Parts from './Parts'; */

const Tools = () => {

    const tools = [
        {
            _id: 1,
            name: 'Transmission',
            description: 'A typical car transmission is comprised of between five and six gear sets and a series of gear trains ',
            img: Transmission,
            quantity:200,
            price:300,
        },
        {
            _id: 2,
            name: 'Radiato',
            description: "' is part of the engine's cooling system, which also includes a liquid coolant, hoses to circulate the coolant, a fan, and a thermostat that monitors the coolant temperature '",
            img: Radiato,
            quantity:180,
            price:120,
            
        },
        {
            _id: 3,
            name: 'Piston',
            description: 'A piston is a component of reciprocating engines, reciprocating pumps, gas compressors, hydraulic cylinders and pneumatic cylinders, among other similar mechanisms ',
            img: Piston,
            quantity:150,
            price:250,
        },
    ]
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