import { Box, Slider, Stack } from '@mui/material';
import { VolumeDown, VolumeUp } from '@mui/icons-material';

import useVolumeSlider from './hooks/useVolumeSlider';
import { getVolume } from '../../services/data';

const VolumeSlider = () => {
  const { handleVolumeChange } = useVolumeSlider();

  return (
    <Box className="media-player__volume">
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider
          aria-label="Volume"
          valueLabelDisplay="auto"
          min={0}
          max={100}
          defaultValue={getVolume()}
          onChange={(e) => handleVolumeChange(e)}
        />
        <VolumeUp />
      </Stack>
    </Box>
  );
};

export default VolumeSlider;
