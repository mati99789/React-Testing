import React from 'react';
import PropTypes from 'prop-types';
import { TableBody } from '@mui/material';

import TRow from '../TableRow/TRow';
import TCell from '../../atoms/TableCell/TableCell';

const TBody = ({ data }) => {
  return (
    <TableBody>
      {data.map((row) => (
        <TRow key={`${row.name} ${row.lastName}`}>
          <TCell>{row.name}</TCell>
          <TCell>{row.lastName}</TCell>
          <TCell>{row.email}</TCell>
          <TCell>{row.phoneNumber}</TCell>
        </TRow>
      ))}
    </TableBody>
  );
};

TBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TBody;
