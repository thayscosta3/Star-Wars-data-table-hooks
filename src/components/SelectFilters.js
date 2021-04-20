import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import SearchBar from './SearchBar';

export default function SelectFilters() {
  const {
    setFiltersByNumericValues,
    filterByNumericValues,
    setNewArray,
    SWPlanets,
    setSortOrder,
  } = useContext(StarWarsContext);

  const [filterObject, setFilterObject] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const [options, setOptions] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );

  const columnsNames = [
    'name',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
    'climate',
    'gravity',
    'terrain',
    'films',
    'created',
    'edited',
    'url',
  ];

  const [sortOption, setSortOption] = useState('ASC');
  const [sortColumn, setSortColumn] = useState('name');

  const hideOption = () => {
    setOptions((prevState) => (
      prevState.filter((item) => (
        item !== filterObject.column))
    ));
  };

  const removeFilter = (item) => {
    setNewArray(SWPlanets);
    setFiltersByNumericValues(filterByNumericValues
      .filter((planet) => planet.column !== item.column));
  };

  const onClick = () => {
    setFiltersByNumericValues([...filterByNumericValues, filterObject]);
    hideOption();
  };

  const orderColumn = () => {
    console.log('entrou no click');
    setSortOrder({ column: sortColumn, sort: sortOption });
  };

  return (
    <div className="header">
      <div>
        <select
          name="column-filter"
          className="btn-dark"
          data-testid="column-filter"
          onChange={
            ({ target: { value } }) => setFilterObject({
              ...filterObject, column: value,
            })
          }
        >
          {options.map((item) => (
            <option key={ item } value={ item }>{item}</option>
          ))}
        </select>
        <select
          name="comparison-filter"
          className="btn btn-dark"
          data-testid="comparison-filter"
          onChange={
            ({ target: { value } }) => setFilterObject({
              ...filterObject, comparison: value,
            })
          }
        >
          <option value="maior que">
            maior que
          </option>
          <option value="menor que">
            menor que
          </option>
          <option value="igual a">
            igual a
          </option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          placeholder="Number"
          onChange={
            ({ target: { value } }) => setFilterObject({
              ...filterObject, value,
            })
          }
        />
        <button
          type="button"
          className="btn btn-dark"
          data-testid="button-filter"
          onClick={ () => onClick() }
        >
          Filtrar
        </button>
      </div>
      { filterByNumericValues.map((item, index) => (
        <div key={ index } data-testid="filter">
          <p>
            { `Filter: ${item.column} ${item.comparison} ${item.value}` }
          </p>
          <button
            type="button"
            onClick={ () => removeFilter(item) }
          >
            X
          </button>
        </div>
      ))}
      <div className="btn-group">
        <select
          name="column-filter"
          className="btn btn-dark"
          data-testid="column-sort"
          onChange={
            ({ target: { value } }) => setSortColumn(value)
          }
        >
          {columnsNames.map((item) => (
            <option key={ item } value={ item }>{item}</option>
          ))}
        </select>
        <label className="btn btn-dark" htmlFor="ASC">
          Ascendente
          <input
            type="radio"
            data-testid="column-sort-input-asc"
            name="order"
            value="ASC"
            checked={ sortOption === 'ASC' }
            onChange={
              ({ target: { value } }) => setSortOption(value)
            }
          />
        </label>
        <label className="btn btn-dark" htmlFor="DESC">
          Descendente
          <input
            type="radio"
            data-testid="column-sort-input-desc"
            name="order"
            value="DESC"
            checked={ sortOption === 'DESC' }
            onChange={
              ({ target: { value } }) => setSortOption(value)
            }
          />
        </label>
        <button
          type="button"
          className="btn btn-dark sort"
          data-testid="column-sort-button"
          onClick={ () => orderColumn() }
        >
          Ordenar
        </button>
      </div>
      <SearchBar />
    </div>
  );
}
