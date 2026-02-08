import React, { useState } from 'react';
import './country.css';
const Country = ({country,visitedCountriesHandler}) => {
    const[visited,setVisited]=useState(false);
    const btnHandle=()=>{
        if(visited){
            setVisited(false);
        }
        else{
            setVisited(true);
        }
        visitedCountriesHandler(country);
    }
    return (
        <div className={`country ${visited ? 'country-visited':''}`}>
            <img src={country.flags.flags.png} alt="" />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <button onClick={btnHandle} className='btn'>
                {visited ? 'visited' : 'Not visited'}
            </button>
        </div>
    );
};

export default Country;