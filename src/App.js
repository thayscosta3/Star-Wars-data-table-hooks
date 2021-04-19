import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import Header from './components/Header';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <Header />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
