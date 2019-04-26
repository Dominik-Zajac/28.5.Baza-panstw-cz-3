import React from 'react';

const CountryDetails = props => {
    const {
        name, 
        capital, 
        currency, 
        imageUrl, 
        populace, 
        continent 
    } = props.country;
    
    return (
    <div className='country-wrapper'>
        <header>
            <img 
                className='country-photo' 
                src={imageUrl} 
                alt='country' 
            />
        </header>
        <div className='country-info'>
            <h1>{name}</h1>
            <h2>Kontynent: {continent}</h2>
            <div className='info'>
                <div>
                    <span>{populace}</span>
                    <span>Ludnosc[mln]</span>
                </div>
                <div>
                    <span>{capital}</span>
                    <span>Stolica</span>
                </div>
                <div>
                    <span>{currency}</span>
                    <span>Waluta</span>
                </div>
            </div>
        </div>  
    </div>
    )
}

export default CountryDetails;