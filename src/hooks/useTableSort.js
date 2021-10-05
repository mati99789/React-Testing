import { useState } from 'react';

const useTableSort = (data) => {
  const [tableHeadName, setTableHeadName] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const sortTable = () => {
    const sortedData = data.sort((a, b) => {
      if (tableHeadName) {
        if (sortOrder === 'asc') {
          return a[tableHeadName] > b[tableHeadName] ? 1 : -1;
        }
        return a[tableHeadName] < b[tableHeadName] ? 1 : -1;
      }

      return 1;
    });

    return sortedData;
  };

  return {
    tableHeadName,
    setTableHeadName,
    sortOrder,
    setSortOrder,
    sortTable,
  };
};

export default useTableSort;
