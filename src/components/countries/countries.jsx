import React, { use, useState } from 'react';
import Country from '../country/country';
import './countries.css';
const Countries = ({countriesPromise}) => {
    const countriesData=use(countriesPromise);
    const countries=countriesData.countries;
    const[visitedCountries,setVisitedCountries]=useState([]);
    const visitedCountriesHandler=(country)=>{
        const newVisitedcountries=[...visitedCountries,country];
        setVisitedCountries(newVisitedcountries);
    }
    return (
        <div>
            <h1>All countries are here: {countries.length}</h1>
            <h1>Total country visited: {visitedCountries.length}</h1>
            <ol>
                {
                visitedCountries.map(country=>(
                    <li key={country.cca3.cca3}>{country.name.common}</li>
                ))
            }
            </ol>
            <div className='countries'>
                {
                countries.map(country=>(
                    <Country  key={country.cca3.cca3} country={country} 
                    visitedCountriesHandler={visitedCountriesHandler}></Country>
                ))
            }
            </div>
        </div>
    );
};

export default Countries;