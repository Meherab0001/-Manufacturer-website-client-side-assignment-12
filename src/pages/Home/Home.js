import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../SharedComponent/Loading';
import Banner from './Banner';
import BussinessSummary from './BussinessSummary';
import Reviews from './Reviews';
import Tools from './Tools';
import WholeSale from './WholeSale';

const Home = () => {
    const [user, loading, error] = useAuthState(auth);

    if(loading){
        return <Loading></Loading>
    }

    return (
        <div className=''>
            <Banner></Banner>
            <Tools></Tools>        
            <Reviews></Reviews>
            <BussinessSummary></BussinessSummary>
            <WholeSale></WholeSale>
          

        </div>
    );
};

export default Home;