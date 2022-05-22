import React from 'react';
import Banner from './Banner';
import BussinessSummary from './BussinessSummary';
import Reviews from './Reviews';
import Tools from './Tools';
import WholeSale from './WholeSale';

const Home = () => {
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