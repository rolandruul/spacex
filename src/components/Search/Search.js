import React, { useState } from 'react';
import Input from './../Input/Input';
import SearchResults from './SearchResults';

function Search({ data }) {

  const [ searchResults, setSearchResults ] = useState({});

  function doSearch(e) {
    const query = e.target.value.toLowerCase();
    const result = data.filter(row => row.name.toLowerCase().includes(query));
    setSearchResults((prevState) => ({
      ...prevState,
      result
    }));
  }

  function doRefresh() {
    setSearchResults({});
  }

  return(
    <div className="search">
      <Input search placeholder="Search" onChange={doSearch} />
      <SearchResults results={searchResults} onTrigger={doRefresh} />
    </div>
  );
}

export default Search;