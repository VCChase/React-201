import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ searchText, setSearchText, setSearchResults, setErrorMsg }) => {
  const navigate = useNavigate();
  const disabled = searchText ? null : "disabled";

  const updateSearchText = (e) => {
    setSearchText(e.target.value);
    setErrorMsg("");
  }

  const handleButton = (e) => {
    e.preventDefault();
    navigate("/search");

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmIwZTJkMWNhNjgwODI1NmQ4MzM1YzlhZDUzZDRiZCIsIm5iZiI6MTcyMTg4Mjk3Mi43MDgxODYsInN1YiI6IjY1ZGEwNzBhOWQ4OTM5MDE2MmRhYmUxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WdSeaK-rNBVbTklvmp4GtYI6mFuBfWpwbp_B4YMdojs'
      }
    };

    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => {
        if (response.results.length > 0) {
          setSearchResults(response.results);
        } else {
          setSearchResults(null);
          setErrorMsg(`Sorry, no results can be found for ${searchText}`);
        }
      })
    
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movie Browser
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" aria-disabled="true" to="/">
                Coming Soon
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={updateSearchText}
            />
            <button className="btn btn-outline-success" onClick={handleButton} disabled={disabled}>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;