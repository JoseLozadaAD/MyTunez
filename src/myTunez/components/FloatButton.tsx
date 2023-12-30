import { Fab } from '@mui/material';
import { Add } from '@mui/icons-material';

const FloatButton = () => {
  return (
    <Fab color="primary" aria-label="add" className="float-button">
      <Add fontSize="large" />
    </Fab>
  );
};

export default FloatButton;
