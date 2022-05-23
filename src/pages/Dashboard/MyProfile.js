import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
  
    return (
        <div>
            <h2 className='text-4xl text-info text-center font-bold'>My profile </h2>
            <label className='text-1xl font-bold text-slate-900' htmlFor="">User Name:
            
            <input className='text-2sl font-bold border rounded ' type="text" placeholder={user.displayName} id="" disabled />
            </label>
            <br />
            <label className='text-1xl font-bold  text-slate-900' htmlFor="">User Name:

            <input className='text-2sl mt-3 font-bold border rounded' type="text" placeholder={user.email} id="" disabled />
            </label>
           
        </div>
    );
};

export default MyProfile;