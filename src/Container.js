import Header from "./components/Header";
import { CountriesProvider } from "./contexts/CountriesContext";
import { ModeContextProvider } from "./contexts/ModeContext";
import CountryCards from "./components/CountryCards";
import SearchAndFilter from "./components/SearchAndFilter";
import Search from "./components/Search";
const Container = () => {
  return (
    <div id="container">
      <ModeContextProvider>
        <Header />
        <CountriesProvider>
          <SearchAndFilter />
          <Search/>
          <CountryCards />
        </CountriesProvider>
      </ModeContextProvider>
    </div>
  );
};

export default Container;
