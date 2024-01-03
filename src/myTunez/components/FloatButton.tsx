import { Fab } from '@mui/material';
import { Add } from '@mui/icons-material';

import type { FloatButtonProps } from '../../types/FloatButton.type';

const FloatButton = ({ handleOpen }: FloatButtonProps) => {
  return (
    <Fab
      color="primary"
      aria-label="add"
      className="float-button"
      onClick={handleOpen}
    >
      <Add fontSize="large" />
    </Fab>
  );
};

export default FloatButton;
