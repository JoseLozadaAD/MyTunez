import { Box, Divider, Typography } from '@mui/material';

import Song from './Song';
import { getData } from '../services/data';
import { SONGS } from '../../constants/localStorage';
import type { AlbumProps } from '../../types/Album.type';
import type { Song as SongType } from '../../types/Types.type';

import { bgPrimaryContrast } from '../../themes/styles';

const Album = ({ artist, title, image, year, onHandleClick }: AlbumProps) => {
  const songs = getData(SONGS).filter((song: SongType) => song.album === title);

  return (
    <Box className="card">
      <Box className="card__header">
        <Typography variant="h3">{artist}</Typography>
        <Divider sx={bgPrimaryContrast} />
      </Box>

      <Box className="card__body">
        <Box className="card__media">
          <img src={image} alt="" onClick={onHandleClick} />
        </Box>

        <Box className="card__content">
          <Box className="card__title">
            <Typography variant="h4">{title}</Typography>
            <Typography variant="h4">{year}</Typography>
          </Box>

          {songs.map((song: SongType, index: number) => (
            <Song
              id={song.id}
              key={song.id}
              number={index + 1}
              name={song.title}
              time={song.duration}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Album;
