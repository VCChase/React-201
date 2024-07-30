import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from  './components/Home';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import FileNotFound from './components/FileNotFound';
import { Routes, Route } from 'react-router-dom';

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmIwZTJkMWNhNjgwODI1NmQ4MzM1YzlhZDUzZDRiZCIsIm5iZiI6MTcyMTQ4MTA2OS4zMDc4NjUsInN1YiI6IjY1ZGEwNzBhOWQ4OTM5MDE2MmRhYmUxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jQUSCVBDKvcpsV5C6QH47PNZALVVpl8bs2c30BNUhok"
  //     }
  //   };

  //   if (searchText) { 
  //     fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`, options)
  //       .then(response => response.json())
  //       .then(data => {
  //         setSearchResults(data.results);
  //       })
  //   } else {
  //     setSearchResults([]);
  //   }

  // }, [searchText]);

  return (
    <div>
      <Navbar
        searchText={searchText}
        setSearchText={setSearchText}
        setSearchResults={setSearchResults}
        setErrorMsg={setErrorMsg}
      />

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<AboutView />} />
        <Route
          path="/search"
          element={
            <SearchView
              keyword={searchText}
              searchResults={searchResults}
              errorMsg={errorMsg}
            />
          }
        />
        <Route path="/movies/:id" element={<MovieView />} />
        <Route path="*" element={<FileNotFound />} />
      </Routes>
    </div>
  );
}

export default App;