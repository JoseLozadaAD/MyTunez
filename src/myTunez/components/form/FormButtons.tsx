import { Box, Button } from '@mui/material';

import type { FormButtonsProps } from '../../../types/Form.type';

const FormButtons = ({
  onReset,
  disabled = true,
  setDisabled,
}: FormButtonsProps) => (
  <Box className="form__buttons">
    <Button
      variant="outlined"
      onClick={() => {
        onReset();
        setDisabled(true);
      }}
    >
      Reset
    </Button>

    <Button variant="outlined" type="submit" disabled={disabled}>
      Save
    </Button>
  </Box>
);

export default FormButtons;
