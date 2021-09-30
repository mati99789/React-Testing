import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

const Title = ({ title }) => {
  return <Typography variant="h1">{title}</Typography>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
