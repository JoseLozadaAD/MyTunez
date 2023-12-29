import { Box, Typography } from '@mui/material';

import type { ArtistType } from '../../types/Artist.type';

import { artistStyle } from '../../themes/styles';

const Artist = ({ image, name }: ArtistType) => {
  return (
    <Box className="artist artist--all" sx={artistStyle}>
      <Box className="artist__image">
        <img src={image} alt="image" />
      </Box>

      <Typography
        variant="h5"
        className="artist__name"
        sx={{
          color: 'secondary.contrastText',
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default Artist;
