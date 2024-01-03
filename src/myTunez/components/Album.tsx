import { Box, Divider, Typography } from '@mui/material';

import Song from './Song';
import useAlbum from './hooks/useAlbum';
import type { AlbumProps } from '../../types/Album.type';
import type { Song as SongType } from '../../types/Types.type';

import { bgPrimaryContrast } from '../../themes/styles';

const Album = ({ album, onHandleClick }: AlbumProps) => {
  const { name, handleSongClick } = useAlbum(album);

  return (
    <Box className="card">
      <Box className="card__header">
        <Typography variant="h3">{name}</Typography>
        <Divider sx={bgPrimaryContrast} />
      </Box>

      <Box className="card__body">
        <Box className="card__media">
          <img src={album.image} alt="" onClick={onHandleClick} />
        </Box>

        <Box className="card__content">
          <Box className="card__title">
            <Typography variant="h4">{album.title}</Typography>
            <Typography variant="h4">{album.year}</Typography>
          </Box>

          {album.songs &&
            album.songs.map((song: SongType, index: number) => (
              <Song
                key={song.id}
                song={song}
                number={index + 1}
                handleClick={() => handleSongClick(song)}
              />
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Album;
