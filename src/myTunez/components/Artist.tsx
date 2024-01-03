import { Box, Typography } from '@mui/material';

import type { ArtistProps } from '../../types/Artist.type';

import { artistStyle, colorSecondaryContrast } from '../../themes/styles';

const Artist = ({ image, name, onHandleClick }: ArtistProps) => {
  return (
    <Box
      className="artist artist--all"
      sx={artistStyle}
      onClick={onHandleClick}
    >
      <Box className="artist__image">
        <img src={image} alt="image" />
      </Box>

      <Typography
        variant="h5"
        className="artist__name"
        sx={colorSecondaryContrast}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default Artist;
