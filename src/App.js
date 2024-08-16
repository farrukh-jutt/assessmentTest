import './App.css';
import { SearchBar } from './components/core/SearchBar';
import { useState } from 'react';
import { WEATHERLIST } from './constant';
import WeatherDetails from './components/core/WeatherDetail';
import SearchHistory from './components/core/SearchHistory'
function App() {
  const [searchedInput, setSearchedInput] = useState("");
  const [searchedHistory,setSearchedHistory] = useState([]);
  const [searchedData,setSearchedData] = useState();
  
  const searchInputHandler =(e)=> {
    setSearchedInput(e.target.value);
     
  }

  const searchButtonhandler =(searchVal)=> {

    if (typeof searchedData === "object" && searchedData?.city) {
      if (!searchedHistory.includes(searchedData)) {
        setSearchedHistory((prev) => [...prev, searchedData]);
      }
    }

    const result = WEATHERLIST.find(
      (value) => value.city.toLowerCase() === searchVal.toLowerCase()
    );
    if (result === undefined) {
      setSearchedData("OOPs not found!");
    } else {
      setSearchedData(result);
    }

    
 }
 
  
  return (
    <div className="bg-slate-50 p-4 rounded-md">
    <SearchBar
      inputHandler={searchInputHandler}
      searchedInput={searchedInput}
      btnHandler={searchButtonhandler}
    />
    <SearchHistory
      searchedHistory={searchedHistory}
      btnHandler={searchButtonhandler}
    />
    {searchedData === "OOPs not found!" ? (
      <h1 className="mt-6 text-red-600">{searchedData}</h1>
    ) : searchedData ? (
      <WeatherDetails weatherDetails={searchedData} />
    ) : (
      <h1 className="mt-6">No data to show!</h1>
    )}
  </div>
  );
}

export default App;
