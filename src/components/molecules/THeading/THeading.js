import React from 'react';
import { TableHead } from '@mui/material';
import PropTypes from 'prop-types';

const THeading = ({ children }) => {
  return <TableHead>{children}</TableHead>;
};

THeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default THeading;
