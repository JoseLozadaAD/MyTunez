import { FormControl, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { FormFieldProps } from '../../../types/Form.type';
import { capitalLetter } from '../../../utils/methods';

const FormField = ({
  name,
  defaultValue,
  formControl,
  rules,
  type = 'text',
}: FormFieldProps) => {
  const {
    control,
    formState: { errors },
  } = formControl;

  return (
    <FormControl className="form__control">
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field }) => (
          <TextField
            {...field}
            required
            className="form__input"
            id="outlined-basic"
            label={capitalLetter(name)}
            variant="outlined"
            error={Boolean(errors[name])}
            helperText={errors[name] && `${errors[name]?.message}`}
            type={type}
          />
        )}
      />
    </FormControl>
  );
};

export default FormField;
