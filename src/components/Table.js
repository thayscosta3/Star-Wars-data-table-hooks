import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

function StarWarsPlanetsTable() {
  return (
    <main>
      <table class="table table-striped table-hover table-sm table-bordered table-dark" border="1">
        <TableHead />
        <TableBody />
      </table>
    </main>
  );
}

export default StarWarsPlanetsTable;
