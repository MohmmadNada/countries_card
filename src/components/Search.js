import React, { useContext } from "react";
import { contriesContext } from "../contexts/CountriesContext";

const Search = () => {
  const { getCountryData } = useContext(contriesContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        getCountryData(
          "https://restcountries.com/v3.1/name/" + e.target.search.value
        );
      }}
    >
      <input id="search" type="search" />
    </form>
  );
};

export default Search;
