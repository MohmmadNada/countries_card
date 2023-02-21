import axios from "axios";
import { createContext, useEffect, useState } from "react";

const contriesContext = createContext();

const CountriesProvider = (props) => {
  const [countries, setCountris] = useState([]);
  const getCountryData = async (url) => {
    console.log("Geting data .......... ");
      await axios
      .get(url)
      .then((res) => setCountris(res.data));
  };
  return (
    <contriesContext.Provider
      value={{ countries, setCountris, getCountryData }}
    >
      {props.children}
    </contriesContext.Provider>
  );
};

export { contriesContext, CountriesProvider };
