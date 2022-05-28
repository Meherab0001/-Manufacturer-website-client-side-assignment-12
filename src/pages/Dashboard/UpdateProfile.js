import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../SharedComponent/Loading';

const UpdateProfile = () => {
    const [user, loading, error] = useAuthState(auth); 
    const { data: profile, isLoading,refetch } = useQuery('profile', () => 
    fetch(`https://young-fjord-38482.herokuapp.com/profile/${user.email}`,{
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
       
        return res.json()}))

        if(isLoading){
            return <Loading></Loading>
        }
    return (
        <div>
            <h1 className='text-3xl text-center text-info'>My Profile</h1>
            <div>
                <h2 className="text-2x">Name:{user.displayName}</h2>
                <h2 className="text-2x">email:{user.email}</h2>
                <div className='mt-3'>
                <p>Address:{profile?.[0].address}</p>
                <p>Phone:{profile?.[0].phone}</p>
                <p>Eduaction:{profile?.[0].edu}</p>
                <p>Linkedin:{profile?.[0].link}</p>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;