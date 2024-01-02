import { Box, Button } from '@mui/material';

import { FormButtonsProps } from '../../../types/Form.type';

const FormButtons = ({ onReset }: FormButtonsProps) => {
  return (
    <Box className="form__buttons">
      <Button
        variant="outlined"
        onClick={() => {
          onReset();
        }}
      >
        Reset
      </Button>

      <Button variant="outlined" type="submit">
        Save
      </Button>
    </Box>
  );
};

export default FormButtons;
