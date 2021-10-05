import React, { useContext } from 'react';
import { Table, TableContainer, Paper, Box } from '@mui/material';
import './Table.css';
import THeading from '../../molecules/THeading/THeading';
import TRow from '../../molecules/TableRow/TRow';
import TBody from '../../molecules/TableBody/TableBody';
import { TableHandlerContext } from '../../../providers/TableHandlerProvider';

export default function BasicTable() {
  const { setSortOrder, sortOrder, tableHeadName, setTableHeadName } =
    useContext(TableHandlerContext);

  const handleSortOrder = ({ target }) => {
    if (tableHeadName === target.innerText) {
      // eslint-disable-next-line no-unused-expressions
      sortOrder === 'asc' ? setSortOrder('desc') : setSortOrder('asc');
    } else {
      setTableHeadName(target.innerText);
      setSortOrder('asc');
    }
  };

  return (
    <>
      <Box>
        <TableContainer sx={{ maxWidth: 650 }} elevation={3} component={Paper}>
          <Table sx={{ maxWidth: 650 }} aria-label="simple table">
            <THeading>
              <TRow>
                <th onClick={handleSortOrder}>Name</th>
                <th onClick={handleSortOrder}>Last Name</th>
                <th onClick={handleSortOrder}>Email</th>
                <th onClick={handleSortOrder}>Phone number</th>
              </TRow>
            </THeading>
            <TBody />
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
