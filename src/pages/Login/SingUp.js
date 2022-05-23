import React from 'react';
import { useCreateUserWithEmailAndPassword,  useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';



import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../SharedComponent/Loading';

const SignUP = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, Updateerror] = useUpdateProfile(auth);



    let navigate = useNavigate();
    let location = useLocation();


    let from = location.state?.from?.pathname || "/";

    if (user || guser) {

        navigate(from)
    }

    let singInErrorMessage;

    if (loading || gloading || updating) {
        return <Loading></Loading>
    }
    if (error || gerror || Updateerror) {
        singInErrorMessage = <p className='text-red-500'>{error?.message || gerror?.message}</p>
    }
    const onSubmit = async (data) => {

       

        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });


    };

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-primary">Sing-UP</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>

                            </label>
                            <input type="Name"
                                placeholder="Your Name"
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
                                <span class="label-text">Email</span>

                            </label>
                            <input type="email"
                                placeholder="Enter your email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email",

                                    {

                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                            message: 'Provide a valid Email'
                                        }
                                    }
                                )}
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.pattern?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>

                            </label>
                            <input type="password"
                                placeholder="Password"
                                class="input input-bordered w-full max-w-xs"
                                {...register("password",

                                    {

                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 character or longer Password'
                                        }
                                    }
                                )}
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        <input />
                        {singInErrorMessage}
                        <input className='btn  w-full max-w-xs text-white' type="submit" value="SinUp" />
                        <p className='mt-2'><small>All Ready have account?</small><Link className='text-primary' to='/login'>Please Loign</Link></p>
                    </form>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline">Countinue With Gooogle</button>

                </div>
            </div>
        </div>
    );
};

export default SignUP;