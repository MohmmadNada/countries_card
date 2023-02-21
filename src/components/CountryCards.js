import React, { useContext, useEffect } from "react";

import { contriesContext } from "../contexts/CountriesContext";
const CountryCards = () => {

  const { countries, getCountryData } = useContext(contriesContext);

  useEffect(() => {
    getCountryData("https://restcountries.com/v3.1/region/europe");
  }, []);

  return (
    <div className="country-cards">
      {countries.map((country) => {
        return (
          <div key={country.name.common}>
            <img src={country.flags.png} alt="" />
            <h3>{country.name.common}</h3>
            <h6>{country.population}</h6>
            <h6>{country.region}</h6>
            <h6>{country.capital}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default CountryCards;
