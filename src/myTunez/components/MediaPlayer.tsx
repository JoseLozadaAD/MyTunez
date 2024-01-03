import { Box, Fab } from '@mui/material';
import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
  PlayArrow,
} from '@mui/icons-material';

import VolumeSlider from './VolumeSlider';

import { bgPrimaryMain } from '../../themes/styles';

const MediaPlayer = () => {
  /* const audioSrc =
    'https://files.gospeljingle.com/uploads/music/2022/12/Foster_The_People_-_Pumped_Up_Kicks.mp3';

   return (
    <audio controls>
      <source src={audioSrc} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  ); */

  return (
    <Box className="media-player">
      <Box className="media-player__controls">
        <Fab size="small" sx={bgPrimaryMain} aria-label="add">
          <KeyboardDoubleArrowLeft
            sx={{ color: 'primary.contrastText' }}
            fontSize="large"
          />
        </Fab>

        <Fab size="small" sx={bgPrimaryMain} aria-label="add">
          <PlayArrow sx={{ color: 'primary.contrastText' }} fontSize="large" />
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
