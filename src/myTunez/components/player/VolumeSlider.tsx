import { Box, Slider, Stack } from '@mui/material';
import { VolumeDown, VolumeUp } from '@mui/icons-material';

const VolumeSlider = () => {
  return (
    <Box className="media-player__volume">
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider aria-label="Volume" valueLabelDisplay="auto" />
        <VolumeUp />
      </Stack>
    </Box>
  );
};

export default VolumeSlider;
