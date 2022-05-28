import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

import Loading from '../SharedComponent/Loading';


const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);


    console.log(user?.displayName)
    const { register, formState: { errors }, handleSubmit ,reset} = useForm();
   
  
    const onSubmit = async (data) => {

        const updateProfile = {
            email:user?.email,
            name:user?.displayName,
            address: data.address,
            phone: data.phone,
            link: data.link,
            edu:data.edu
        }
        console.log(updateProfile)
        console.log(updateProfile)
        fetch('https://young-fjord-38482.herokuapp.com/profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(updateProfile)
        })
            .then((res => {
                console.log(res)
                return res.json()
            }))
        reset()

     
        if (loading) {
            return <Loading></Loading>
        }
    }

    return (
        <div >
        
       
            <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Your Name</span>

                    </label>
                    <input type="text"
                    value={user?.displayName}
                        placeholder="Your  Name"
                        class="input input-bordered w-full max-w-xs"
                        {...register("name",

                            {

                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                },

                            }
                        )}
                    />
                    <label class="label">
                        {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}

                    </label>
                </div>
            <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Your Email</span>

                    </label>
                    <input type="email"
                    value={user?.email}
                        placeholder="Your email"
                        class="input input-bordered w-full max-w-xs"
                        {...register("email",

                            {

                                required: {
                                    value: true,
                                    message: 'email is Required'
                                },

                            }
                        )}
                    />
                    <label class="label">
                        {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}

                    </label>
                </div>
            <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Your City</span>

                    </label>
                    <input type="country"

                        placeholder="Your City"
                        class="input input-bordered w-full max-w-xs"
                        {...register("address",

                            {

                                required: {
                                    value: true,
                                    message: 'City is Required'
                                },

                            }
                        )}
                    />
                    <label class="label">
                        {errors.address?.type === 'required' && <span class="label-text-alt text-red-500">{errors.address.message}</span>}

                    </label>
                </div>
            <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Your Phone</span>

                    </label>
                    <input type="number"
                  
                        placeholder="Your Phone"
                        class="input input-bordered w-full max-w-xs"
                        {...register("phone",

                            {

                                required: {
                                    value: true,
                                    message: 'Phone is Required'
                                },

                            }
                        )}
                    />
                    <label class="label">
                        {errors.phone?.type === 'required' && <span class="label-text-alt text-red-500">{errors.phone.message}</span>}

                    </label>
                </div>
            <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Education</span>

                    </label>
                    <input type="text"
                    
                        placeholder="Your Eduactional skill"
                        class="input input-bordered w-full max-w-xs"
                        {...register("edu",

                            {

                                required: {
                                    value: true,
                                    message: 'Link is Required'
                                },

                            }
                        )}
                    />
                    <label class="label">
                        {errors.edu?.type === 'required' && <span class="label-text-alt text-red-500">{errors.edu.message}</span>}

                    </label>
                </div>
            <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">LinkedIn</span>

                    </label>
                    <input type="text"
                    
                        placeholder="Your Phone"
                        class="input input-bordered w-full max-w-xs"
                        {...register("link",

                            {

                                required: {
                                    value: true,
                                    message: 'Link is Required'
                                },

                            }
                        )}
                    />
                    <label class="label">
                        {errors.link?.type === 'required' && <span class="label-text-alt text-red-500">{errors.link.message}</span>}

                    </label>
                </div>

               <Link to='profile'> <input 
          
          className='btn  w-full max-w-xs text-white' type="submit" value="Update Your Profile" /></Link>

            </form>
           

        </div>
    );
};

export default MyProfile;