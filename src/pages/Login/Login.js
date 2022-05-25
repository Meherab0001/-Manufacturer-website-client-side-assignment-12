import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';



import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../SharedComponent/Loading';


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let navigate = useNavigate();
    let location = useLocation();

    const [token] =useToken(user || gUser)
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (token) {
            navigate(from);
        }
    }, [token,from,navigate])

    let singInErrorMessage;

    if (loading || gLoading) {
        return <Loading></Loading>
    }
    if (error || gerror) {
        singInErrorMessage = <p className='text-red-500'>{error?.message || gerror?.message}</p>
    }
    const onSubmit = data => {

        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-primary">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                        <input className='btn  w-full max-w-xs text-white' type="submit" value="Login" />
                        <p className='mt-2'><small>New to M anufacturer?</small><Link className='text-primary' to='/singUp'>Create New Account.</Link></p>
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

export default Login;