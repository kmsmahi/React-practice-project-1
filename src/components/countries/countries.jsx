import React, { use } from 'react';
import Country from '../country/country';
import './countries.css';
const Countries = ({countriesPromise}) => {
    const countriesData=use(countriesPromise);
    const countries=countriesData.countries;
    
    return (
        <div>
            <h1>All countries are here: {countries.length}</h1>
            <div className='countries'>
                {
                countries.map(country=>(
                    <Country  key={country.cca3} country={country}></Country>
                ))
            }
            </div>
        </div>
    );
};

export default Countries;