import React from 'react';
import homeImage from '../Home.png';

const Home = () => (
    <div className='country-logo-wrapper'>
        <h1> Witamy w aplikacji Panstwa</h1>
        <img className='home-image' src={homeImage} alt='Country' />
    </div>
);

export default Home;