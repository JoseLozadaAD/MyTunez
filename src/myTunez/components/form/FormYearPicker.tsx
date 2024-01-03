import { FormControl, FormHelperText } from '@mui/material';
import { Controller } from 'react-hook-form';
import { FormFieldProps } from '../../../types/Form.type';
import { capitalLetter } from '../../../utils/methods';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const FormYearPicker = ({ name, formControl, rules }: FormFieldProps) => {
  const {
    control,
    formState: { errors },
  } = formControl;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormControl error={Boolean(errors[name])} className="form__control">
        <Controller
          name={name}
          control={control}
          defaultValue={null}
          rules={rules}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              className="form__input"
              label={capitalLetter(name)}
              value={value}
              onChange={onChange}
              views={['year']}
              format="yyyy"
            />
          )}
        />
        <FormHelperText>
          {errors[name] && `${errors[name]?.message}`}
        </FormHelperText>
      </FormControl>
    </LocalizationProvider>
  );
};

export default FormYearPicker;
