import React, { useContext } from 'react';
import SelectFilters from './SelectFilters';
// import SearchBar from './SearchBar';

function Header() {
  return (
    <header>
      <SelectFilters />
      {/* <SearchBar /> */}
    </header>
  );
}

export default Header;