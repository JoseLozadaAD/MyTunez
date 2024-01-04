import { useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { getArtistById } from '../../services/artist';
import { setSong } from '../../store/player/playerSlice';
import type { Album, Song } from '../../../types/Types.type';

const useAlbum = (album: Album) => {
  const dispatch = useDispatch();

  const { name } = getArtistById(album.artist);

  const handleSongClick = useCallback(
    (song: Song) => {
      const artistName = getArtistById(album.artist).name;
      const albumTitle = album.title;
      const albumId = album.id;
      const cover = album.image;

      dispatch(
        setSong({
          id: song.id,
          title: song.title,
          audioSrc: song.link,
          artistName,
          albumId,
          albumTitle,
          cover,
          duration: song.duration,
        }),
      );
    },
    [album, dispatch],
  );

  return { name, handleSongClick };
};

export default useAlbum;
