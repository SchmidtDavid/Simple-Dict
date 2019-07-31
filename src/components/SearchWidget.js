import React, { useState } from 'react';
import { Definitions } from './Definitions';
import { SearchBar } from './SearchBar';

export function SearchWidget () {
  const [query, setQuery] = useState("");
  function search(term) {
    setQuery(term);
  }
  return (
    <React.Fragment>
      <SearchBar callBack={search}/>
      {query ? (
        <Definitions word={query}/>)
      : (null)}
    </React.Fragment>
  )
}