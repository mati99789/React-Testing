import React, { useContext } from 'react';
import { Box } from '@mui/material';
import Table from '../components/organism/Table/Table';
import Title from '../components/atoms/Title/Title';
import Pagination from '../components/atoms/Pagination/Pagination';
import { TableHandlerContext } from '../providers/TableHandlerProvider';

const TableView = () => {
  const { rowsPerPage, data, paginate } = useContext(TableHandlerContext);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Title title="Users Table" />
      <Table />
      <Pagination
        rowsPerPage={rowsPerPage}
        rows={data.length}
        paginate={paginate}
      />
    </Box>
  );
};

export default TableView;
