import React from 'react';
import { TextField } from '@mui/material';
import propTypes from 'prop-types';

const Input = ({ label, type }) => {
  return (
    <>
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        type={type}
      />
    </>
  );
};

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  label: propTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  type: propTypes.string,
};

export default Input;
