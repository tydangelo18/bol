import React, { useMemo } from 'react';
import { useTable, useSortBy /* useFilters */ } from 'react-table';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { COLUMNS } from './columns';
import { getGames } from '../../actions/game';
// import { ColumnFilter } from './ColumnFilter';
import '../../styles/tables/Table.css';

const Table = ({ getGames, game: { games }, auth }) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(
    () =>
      games.filter((game) => {
        return game.user === auth.user._id;
      }) || [],
    [games, auth]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      // useFilters,
      useSortBy
    );

  return (
    <table {...getTableProps()}>
      <thead>
        {' '}
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                {
                  // <div>{column.canFilter ? column.render('Filter') : null}</div>
                }
                <span>
                  {column.isSorted ? (column.isSortedDesc ? ' +' : ' -') : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  getGames: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  game: state.game,
  auth: state.auth,
});

export default connect(mapStateToProps, { getGames })(Table);
