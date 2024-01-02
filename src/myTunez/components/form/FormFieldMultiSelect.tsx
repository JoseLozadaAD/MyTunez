import { Controller } from 'react-hook-form';

import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  useTheme,
} from '@mui/material';

import { capitalLetter } from '../../../utils/methods';
import type { FormFieldProps } from '../../../types/Form.type';

import { getStyles } from '../../../themes/styles';

const FormFieldMultiSelect = ({
  name,
  defaultValue,
  formControl,
  rules,
  items,
}: FormFieldProps) => {
  const theme = useTheme();

  const {
    control,
    formState: { errors },
  } = formControl;

  return (
    <FormControl
      className="form__control--multi-select mb-1"
      error={Boolean(errors[name])}
    >
      <InputLabel id="multiple-name-label" className="font-14">
        {`${capitalLetter(name)} *`}
      </InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field }) => (
          <Select
            {...field}
            labelId="multiple-name-label"
            id="multiple-name"
            multiple
            className="font-12"
            input={<OutlinedInput label={`${capitalLetter(name)} __ *`} />}
            sx={{
              '& svg': {
                fill: errors[name] ? 'red' : theme.palette.primary.contrastText,
              },
            }}
          >
            {items?.map((item) => (
              <MenuItem
                key={item}
                value={item}
                className="font-14"
                style={getStyles(String(item), field.value, theme)}
              >
                {item}
              </MenuItem>
            ))}
          </Select>
        )}
      />
      <FormHelperText className="font-11">
        {errors[name] && `${errors[name]?.message}`}
      </FormHelperText>
    </FormControl>
  );
};

export default FormFieldMultiSelect;
