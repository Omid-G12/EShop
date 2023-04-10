import React from 'react';
import { TextField, Grid } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

const FormInput = ({name, label}) => {
  const {control} = useFormContext();
  // const isError = false;

  return (
    <div>
      <Grid item minWidth={270} /*width={270}*/>
        <Controller
          control={control}
          name={name}
          render = {({field}) => (
            <TextField
              fullWidth
              label={label}
              required
            />
          )}
          // error={isError}
        />
      </Grid>
    </div>
  )
}

export default FormInput;