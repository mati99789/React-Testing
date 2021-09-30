import React from 'react';
import { Box } from '@mui/material';
import Title from '../../atoms/Title/Title';
import FormField from '../../molecules/FormField/FormField';
import Button from '../../atoms/Button/Button';

const Form = () => {
  return (
    <section>
      <Title title="Form" />
      <form>
        <Box sx={{ m: 1 }}>
          <FormField type="text" label="User Name" />
        </Box>
        <Box sx={{ m: 1 }}>
          <FormField type="text" label="Last Name" />
        </Box>
        <Box sx={{ m: 1 }}>
          <FormField type="tel" label="Phone Number" />
        </Box>
        <Box sx={{ m: 1 }}>
          <FormField type="email" label="Email adress" />
        </Box>
      </form>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button>Send </Button>
      </Box>
    </section>
  );
};

export default Form;
