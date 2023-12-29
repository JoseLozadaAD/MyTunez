import { Box, Divider, Typography } from '@mui/material';
import Song from './Song';

const songs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Album = () => {
  return (
    <Box className="card">
      <Box className="card__header">
        <Typography variant="h3">MyTunez</Typography>
        <Divider sx={{ bgcolor: 'primary.contrastText' }} />
      </Box>

      <Box className="card__body">
        <Box className="card__media">
          <img
            src="https://media.hitparade.ch/cover/big/foster_the_people-pumped_up_kicks_s.jpg"
            alt=""
          />
        </Box>

        <Box className="card__content">
          <Box className="card__title">
            <Typography variant="h4">Torches</Typography>
            <Typography variant="h4">2011</Typography>
          </Box>

          {songs.map((song) => (
            <Song number={song} name="Pumped up kicks" time="3:20" />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Album;
