import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CountryCard from './CountryCard';
import './Countries.scss';

export default function Countries() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <h2>Paesi</h2>
      <div className="countriesContainer">
        {countries.map((country) => (
          <Link key={country.cca3} to={`/country/${country.cca3}`} className="countryLink">
            <CountryCard country={country} />
          </Link>
        ))}
      </div>
    </>
  );
};
