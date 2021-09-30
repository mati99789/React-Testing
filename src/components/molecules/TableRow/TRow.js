import React from 'react';
import { TableRow } from '@mui/material';
import PropTypes from 'prop-types';

const TRow = ({ children }) => {
  return <TableRow>{children}</TableRow>;
};

TRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TRow;
