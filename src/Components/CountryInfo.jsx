import React from 'react';
import { useParams } from 'react-router-dom';
import './CountryInfo.scss';

export default function () {

  const { code } = useParams();

  return (
    <div>
      <h2>Dettagli{code}</h2>
    </div>
  );
};
