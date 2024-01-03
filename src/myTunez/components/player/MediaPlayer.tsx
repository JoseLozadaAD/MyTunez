import { Box, Fab } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
  Pause,
  PlayArrow,
} from '@mui/icons-material';

import VolumeSlider from './VolumeSlider';
import { setPause, setPlay } from '../../store/player/playerSlice';
import type { RootState } from '../../store/store';

import { bgPrimaryMain } from '../../../themes/styles';

const MediaPlayer = () => {
  const { isPlaying, audioSrc } = useSelector(
    (state: RootState) => state.player,
  );
  const dispatch = useDispatch();

  const handlePlay = () => {
    if (audioSrc) {
      dispatch(setPlay());
    }
  };

  const handlePause = () => {
    dispatch(setPause());
  };

  /* const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {

  }; */

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
