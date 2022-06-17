import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import CountriesJson from './countries.json';
import axios from 'axios'

import {Routes, Route,useParams} from "react-router-dom";


function App() {

  const [country, setCountries] = useState(CountriesJson);
  let { alpha3Code} = useParams("");



  React.useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries").then((response) => {
      setCountries(response.data);
    });
  }, []);
  if (!country) return null;


  return (
    <div className="App">
    <Navbar />
  
    <CountriesList  country={country} />
 
 <Routes>
 <Route path="/:alpha3Code" element={ <CountryDetails country={country} /> } />
 </Routes>
     
    </div>
  );
}

export default App;
