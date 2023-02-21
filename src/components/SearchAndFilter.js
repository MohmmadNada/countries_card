import React, { useContext } from "react";
import { contriesContext } from "../contexts/CountriesContext";
const SearchAndFilter = () => {
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const { getCountryData } = useContext(contriesContext);
  return (
    <select
      onChange={(e) => {
        getCountryData(
          "https://restcountries.com/v3.1/region/" + e.target.value
        );
      }}
    >
      {regions.map((region) => {
        return (
          <option key={region} value={region}>
            {region}
          </option>
        );
      })}
    </select>
  );
};

export default SearchAndFilter;
