import { Box, Slider, Typography } from '@mui/material';
import { Loop, Shuffle } from '@mui/icons-material';

import {
  colorPrimaryContrast,
  colorPrimaryMain,
  sliderStyles,
} from '../../../themes/styles';

const ProgressBar = () => {
  return (
    <Box className="progress-bar">
      <Loop className="progress-bar__icon" sx={colorPrimaryMain} />
      <Box className="progress-bar__slider">
        <Slider
          defaultValue={0}
          aria-label="time-indicator"
          min={0}
          step={1}
          max={238}
          sx={sliderStyles}
        />

        <Box className="progress-bar__duration">
          <Typography variant="caption">0:00</Typography>

          <Typography variant="caption">2:45</Typography>
        </Box>
      </Box>
      <Shuffle className="progress-bar__icon" sx={colorPrimaryContrast} />
    </Box>
  );
};

export default ProgressBar;
