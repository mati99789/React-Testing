import React from 'react';
import { Box } from '@mui/material';
import Table from '../components/organism/Table/Table';
import Title from '../components/atoms/Title/Title';

const TableView = ({ data }) => {
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
      <Table data={data} />
    </Box>
  );
};

export default TableView;
