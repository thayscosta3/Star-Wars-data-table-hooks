import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function SearchBar() {
  const { filteredPlanets } = useContext(StarWarsContext);

  return (
    <input
      type="text"
      name="search"
      placeholder="Type to search a Star Wars Planet"
      data-testid="name-filter"
      onChange={
        ({ target: { value } }) => filteredPlanets(value)
      }
    />
  );
}
