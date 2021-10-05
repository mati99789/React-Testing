import React from 'react';
import { Box } from '@mui/material';
import Title from '../../atoms/Title/Title';
import FormField from '../../molecules/FormField/FormField';
import Button from '../../atoms/Button/Button';
import { formData } from '../../../helpers/formFieldData';

const Form = () => {
  return (
    <section>
      <Title title="Form" />
      <form>
        {formData.map(({ type, label }) => (
          <Box sx={{ m: 1 }}>
            <FormField type={type} label="{label}" />
          </Box>
        ))}
      </form>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button>Send </Button>
      </Box>
    </section>
  );
};

export default Form;
