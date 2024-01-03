import { useDispatch } from 'react-redux';

import { getArtistById } from '../../services/data';
import { setSong } from '../../store/player/playerSlice';
import type { Album, Song } from '../../../types/Types.type';

const useAlbum = (album: Album) => {
  const dispatch = useDispatch();

  const { name } = getArtistById(album.artist);
  const handleSongClick = (song: Song) => {
    const artistName = getArtistById(album.artist).name;
    const albumTitle = album.title;
    const cover = album.image;

    dispatch(
      setSong({
        id: song.id,
        title: song.title,
        audioSrc: song.link,
        artistName,
        albumTitle,
        cover,
      }),
    );
  };

  return { name, handleSongClick };
};

export default useAlbum;
