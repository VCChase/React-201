import Hero from "./Hero";
import MovieCard from "./MovieCard";

const SearchView = ({ keyword, searchResults, errorMsg }) => {
  const searchText = `You are searching for ${keyword}`;
  
  let resultsHtml;
  if (searchResults === null) {
    resultsHtml = <h2 className="text-center mt-5">{errorMsg}</h2>
  } else {
    resultsHtml = searchResults.map((obj, i) => {
      return <MovieCard movie={obj} key={i} />
    });
  }

  const results = <div className="container"><div className="row">{resultsHtml}</div></div>;

  return (
    <>
      <Hero text={searchText} />
      {results}
    </>
  );
}

export default SearchView;