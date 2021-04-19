import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function SearchBar() {
  const { filteredPlanets } = useContext(StarWarsContext);

  return (
    <>
    <label className="btn btn-dark" htmlFor="search">
      Buscar Planeta
    </label>
      <input
        type="text"
        name="search"
        placeholder="Type to search a Star Wars Planet"
        data-testid="name-filter"
        onChange={
          ({ target: { value } }) => filteredPlanets(value)
        }
      />
    </>
  );
}
