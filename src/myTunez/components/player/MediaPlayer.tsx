import { Box, Fab } from '@mui/material';
import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
  Pause,
  PlayArrow,
} from '@mui/icons-material';

import VolumeSlider from './VolumeSlider';
import { bgPrimaryMain } from '../../../themes/styles';
import useMediaPlayer from './hooks/useMediaPlayer';

const MediaPlayer = () => {
  const { isPlaying, handlePlay, handlePause } = useMediaPlayer();

  return (
    <Box className="media-player">
      <Box className="media-player__controls">
        <Fab size="small" sx={bgPrimaryMain} aria-label="add">
          <KeyboardDoubleArrowLeft
            sx={{ color: 'primary.contrastText' }}
            fontSize="large"
          />
        </Fab>

        <Fab
          size="small"
          sx={bgPrimaryMain}
          aria-label="add"
          onClick={handlePlay}
          className={`${isPlaying ? 'hide' : ''}`}
        >
          <PlayArrow sx={{ color: 'primary.contrastText' }} fontSize="large" />
        </Fab>

        <Fab
          size="small"
          sx={bgPrimaryMain}
          aria-label="add"
          className={`${!isPlaying ? 'hide' : ''}`}
          onClick={handlePause}
        >
          <Pause sx={{ color: 'primary.contrastText' }} fontSize="large" />
        </Fab>

        <Fab size="small" sx={bgPrimaryMain} aria-label="add">
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
