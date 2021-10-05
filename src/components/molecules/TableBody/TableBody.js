import React, { useContext } from 'react';
import { TableBody } from '@mui/material';
import TRow from '../TableRow/TRow';
import TCell from '../../atoms/TableCell/TableCell';
import { TableHandlerContext } from '../../../providers/TableHandlerProvider';

const TBody = () => {
  const { sortTable } = useContext(TableHandlerContext);

  return (
    <TableBody>
      {sortTable().map((row) => (
        <TRow key={`${row.Name} ${row['Last Name']}`}>
          <TCell>{row.Name}</TCell>
          <TCell>{row['Last Name']}</TCell>
          <TCell>{row.Email}</TCell>
          <TCell>{row['Phone Number']}</TCell>
        </TRow>
      ))}
    </TableBody>
  );
};

export default TBody;
