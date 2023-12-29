import { Box, Typography } from '@mui/material';
import ProgressBar from './ProgressBar';

const OptionsPlayer = () => {
  return (
    <Box className="options-player">
      <Box className="options-player__cover">
        <img
          src="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-125606-092313-weekend-rock-10-500-1379961073.jpg?w=500"
          alt="cover image"
          loading="lazy"
        />
      </Box>

      <Box className="options-player__info">
        <Typography
          variant="h5"
          color="primary"
          className="options-player__title"
        >
          Pink Floyd
        </Typography>

        <Typography
          variant="h5"
          sx={{ color: 'primary.contrastText' }}
          className="options-player__title"
        >
          Cluster One - The Division Bell
        </Typography>

        <ProgressBar />
      </Box>
    </Box>
  );
};

export default OptionsPlayer;
