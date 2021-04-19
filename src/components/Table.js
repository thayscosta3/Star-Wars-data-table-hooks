import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

function StarWarsPlanetsTable() {
  return (
    <table
      className="table table-striped table-hover table-sm table-bordered table-dark"
    >
      <TableHead />
      <TableBody />
    </table>
  );
}

export default StarWarsPlanetsTable;
