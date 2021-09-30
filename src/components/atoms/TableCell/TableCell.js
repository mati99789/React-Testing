import React from 'react';
import { TableCell } from '@mui/material';
import Proptypes from 'prop-types';

const TCell = ({ children }) => {
  return <TableCell>{children}</TableCell>;
};

TCell.propTypes = {
  children: Proptypes.node.isRequired,
};

export default TCell;
