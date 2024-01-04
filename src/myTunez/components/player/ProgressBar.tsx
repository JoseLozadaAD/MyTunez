import { Loop, Shuffle } from '@mui/icons-material';
import { Box, Slider, Typography } from '@mui/material';

import useShuffle from './hooks/useShuffle';
import useProgressBar from './hooks/useProgressBar';
import { convertToSeconds } from '../../../utils/methods';

import {
  colorPrimaryContrast,
  colorPrimaryMain,
  sliderStyles,
} from '../../../themes/styles';

const ProgressBar = () => {
  const { time, duration, currentTime, handleSliderChange } = useProgressBar();
  const { shuffle, handleShuffle } = useShuffle();

  return (
    <Box className="progress-bar">
      <Loop className="progress-bar__icon" sx={colorPrimaryMain} />
      <Box className="progress-bar__slider">
        <Slider
          value={currentTime}
          valueLabelDisplay="auto"
          aria-label="time-indicator"
          min={0}
          step={1}
          max={convertToSeconds(duration)}
          sx={sliderStyles}
          onChange={handleSliderChange}
        />

        {duration && (
          <Box className="progress-bar__duration">
            <Typography
              variant="caption"
              sx={{ color: 'primary.contrastText' }}
            >
              {isNaN(currentTime) ? '0:00' : time}
            </Typography>

            <Typography
              variant="caption"
              sx={{ color: 'primary.contrastText' }}
            >
              {duration}
            </Typography>
          </Box>
        )}
      </Box>
      <Shuffle
        className="progress-bar__icon"
        sx={!shuffle ? colorPrimaryContrast : colorPrimaryMain}
        onClick={handleShuffle}
      />
    </Box>
  );
};

export default ProgressBar;
