import { Fab } from '@mui/material';
import { Add } from '@mui/icons-material';

import type { FloatButtonType } from '../../types/FloatButton.type';

const FloatButton = ({ handleOpen }: FloatButtonType) => {
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
