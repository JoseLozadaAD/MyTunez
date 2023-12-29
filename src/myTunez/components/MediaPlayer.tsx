import { Box, Fab } from '@mui/material';
import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
  PlayArrow,
} from '@mui/icons-material';

import VolumeSlider from './VolumeSlider';

const MediaPlayer = () => {
  return (
    <Box className="media-player">
      <Box className="media-player__controls">
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

      <VolumeSlider />
    </Box>
  );
};

export default MediaPlayer;
