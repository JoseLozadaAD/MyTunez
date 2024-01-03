import { Box, Typography } from '@mui/material';

import type { SongProps } from '../../types/Song.type';
import { PlayArrow } from '@mui/icons-material';

const Song = ({ number, name, time }: SongProps) => {
  return (
    <Box className="card__song">
      {icon()}
      <Typography
        variant="h5"
        className="number-song"
      >{`${number}.`}</Typography>
      <Typography variant="h5">{name}</Typography>
      <Typography variant="h6" sx={{ color: 'primary.contrastText' }}>
        {time}
      </Typography>
    </Box>
  );
};

const icon = () => (
  <PlayArrow className="icon-song" sx={{ color: 'primary.main' }} />
);

export default Song;
