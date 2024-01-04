import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

import ProgressBar from './ProgressBar';
import type { RootState } from '../../store/store';

import { colorPrimaryContrast } from '../../../themes/styles';

const OptionsPlayer = () => {
  const {
    song: { artistName, albumTitle, title, cover },
  } = useSelector((state: RootState) => state.player);

  return (
    <Box className="options-player">
      <Box className="options-player__cover">
        {cover && <img src={cover} alt="cover" />}
      </Box>

      <Box className="options-player__info">
        <Typography
          variant="h5"
          color="primary"
          className="options-player__title"
        >
          {artistName}
        </Typography>

        <Typography
          variant="h5"
          sx={colorPrimaryContrast}
          className="options-player__title"
        >
          {title} - {albumTitle}
        </Typography>

        <ProgressBar />
      </Box>
    </Box>
  );
};

export default OptionsPlayer;
