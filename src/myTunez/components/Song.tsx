import { Box, Typography } from '@mui/material';

import SongIcon from './SongIcon';
import useSong from './hooks/useSong';
import type { SongProps } from '../../types/Song.type';

const Song = ({ number, song, handleClick }: SongProps) => {
  const { handleToggleClick, id, isPlaying } = useSong(handleClick, song);

  return (
    <Box
      onClick={handleToggleClick}
      className="card__song"
      sx={{ '&:hover': { bgcolor: 'secondary.dark' } }}
    >
      <SongIcon songId={song.id} currentId={id} isPlaying={isPlaying} />
      <Typography
        variant="h5"
        className={`number-song ${song.id === id ? 'no-opacity' : ''}`}
        color="primary.contrastText"
      >{`${number}.`}</Typography>
      <Typography variant="h5" color="primary.contrastText">
        {song.title}
      </Typography>
      <Typography variant="h6" sx={{ color: 'primary.contrastText' }}>
        {song.duration}
      </Typography>
    </Box>
  );
};

export default Song;
