import React from 'react';
import './CountryCard.scss';

export default function CountryCard({ country }) {
  
  const { common, flags, region, subregion, population } = country;

  return (
    <div className="countryCard">
      <h3>{common}</h3>
      <img src={flags.png} alt={`Flag of ${common}`} className="flagImage" />
      <p><strong>Region:</strong> {region}</p>
      <p><strong>Subregion:</strong> {subregion}</p>
      <p><strong>Population:</strong> {population}</p>
    </div>
  );
}
