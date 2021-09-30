import React from 'react';
import propTypes from 'prop-types';
import Wrapper from './FormField.styles';
import Input from '../../atoms/Input/Input';

const FormField = ({ label, type }) => {
  return (
    <Wrapper>
      <Input label={label} type={type} />
    </Wrapper>
  );
};

FormField.propTypes = {
  label: propTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  type: propTypes.string,
};

export default FormField;
