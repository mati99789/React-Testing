import React from 'react';
import { Table, TableContainer, Paper, Box } from '@mui/material';
import './Table.css';
import Title from '../../atoms/Title/Title';
import THeading from '../../molecules/THeading/THeading';
import data from '../../../data/userData';
import TRow from '../../molecules/TableRow/TRow';
import TCell from '../../atoms/TableCell/TableCell';
import TBody from '../../molecules/TableBody/TableBody';

export default function BasicTable() {
  return (
    <>
      <Box>
        <TableContainer sx={{ maxWidth: 650 }} elevation={3} component={Paper}>
          <Table sx={{ maxWidth: 650 }} aria-label="simple table">
            <THeading>
              <TRow>
                <TCell>Name</TCell>
                <TCell align="right">Last Name</TCell>
                <TCell align="right">Email</TCell>
                <TCell align="right">Phone number</TCell>
              </TRow>
            </THeading>
            <TBody data={data} />
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
