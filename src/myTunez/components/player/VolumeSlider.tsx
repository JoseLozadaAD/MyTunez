import { Box, Slider, Stack } from '@mui/material';
import { VolumeDown, VolumeUp } from '@mui/icons-material';

import useVolumeSlider from './hooks/useVolumeSlider';

const VolumeSlider = () => {
  const { handleVolumeChange, value } = useVolumeSlider();

  return (
    <Box className="media-player__volume">
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown sx={{ color: 'primary.contrastText' }} />
        <Slider
          aria-label="Volume"
          valueLabelDisplay="auto"
          min={0}
          max={100}
          defaultValue={value}
          value={value}
          onChange={handleVolumeChange}
        />
        <VolumeUp sx={{ color: 'primary.contrastText' }} />
      </Stack>
    </Box>
  );
};

export default VolumeSlider;
