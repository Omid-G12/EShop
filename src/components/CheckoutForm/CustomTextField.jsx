import React from 'react';
import { TextField, Grid } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

const FormInput = ({name, label, required}) => {
  const {control} = useFormContext();
  // const isError = false;

  return (
    <div>
      <Grid item xs={12} sm={6}>
        <Controller
          control={control}
          name={name}
          render = {({field}) => (
            <TextField
              fullWidth
              label={label}
              required={required}
            />
          )}
          // error={isError}
        />
      </Grid>
    </div>
  )
}

export default FormInput;