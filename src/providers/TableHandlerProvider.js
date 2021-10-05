import React from 'react';
import data from '../data/userData';
import usePagination from '../hooks/usePagination';
import useTableSort from '../hooks/useTableSort';

export const TableHandlerContext = React.createContext({
  getTableHead: () => {},
  handleSortOrder: () => {},
  setSortOrder: () => {},
  setTableHeadName: () => {},
  sortOrder: '',
  tableHeadName: '',
});

const TableHandlerProvider = ({ children }) => {
  const { currentData, rowsPerPage, paginate } = usePagination(data);

  const {
    tableHeadName,
    setTableHeadName,
    sortOrder,
    setSortOrder,
    sortTable,
  } = useTableSort(currentData);

  return (
    <TableHandlerContext.Provider
      value={{
        setSortOrder,
        sortOrder,
        tableHeadName,
        setTableHeadName,
        currentData,
        rowsPerPage,
        paginate,
        sortTable,
        data,
      }}
    >
      {children}
    </TableHandlerContext.Provider>
  );
};

export default TableHandlerProvider;
