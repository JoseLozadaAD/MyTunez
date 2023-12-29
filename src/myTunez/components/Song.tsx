import { Box, Typography } from '@mui/material';

import type { SongType } from '../../types/Song.type';

const Song = ({ number, name, time }: SongType) => {
  return (
    <Box className="card__song">
      <Typography variant="h5">{`${number}.`}</Typography>
      <Typography variant="h5">{name}</Typography>
      <Typography variant="h6" sx={{ color: 'primary.contrastText' }}>
        {time}
      </Typography>
    </Box>
  );
};

export default Song;
