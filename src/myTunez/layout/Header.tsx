import { Box, Fab } from '@mui/material';
import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
  PlayArrow,
} from '@mui/icons-material';

const Header = () => {
  return (
    <Box className="header" sx={{ bgcolor: 'secondary.dark' }}>
      <Fab size="small" sx={{ bgcolor: 'primary.main' }} aria-label="add">
        <KeyboardDoubleArrowLeft
          sx={{ color: 'primary.contrastText' }}
          fontSize="large"
        />
      </Fab>

      <Fab size="small" sx={{ bgcolor: 'primary.main' }} aria-label="add">
        <PlayArrow sx={{ color: 'primary.contrastText' }} fontSize="large" />
      </Fab>

      <Fab size="small" sx={{ bgcolor: 'primary.main' }} aria-label="add">
        <KeyboardDoubleArrowRight
          sx={{ color: 'primary.contrastText' }}
          fontSize="large"
        />
      </Fab>
    </Box>
  );
};

export default Header;
