import { ALBUMS } from '../../constants/localStorage';
import { Album } from '../../types/Types.type';

export const getAlbumByArtistId = (id: number) => {
  const data = localStorage.getItem(ALBUMS);

  if (data) {
    const albums = JSON.parse(data).filter(
      (album: Album) => album.artist === id,
    );

    return id === -1 ? JSON.parse(data) : albums;
  }

  return [];
};

export const getAlbumById = (id: number) => {
  const data = localStorage.getItem(ALBUMS);

  if (data && id !== -1) {
    const albums = JSON.parse(data).find((album: Album) => album.id === id);

    return albums;
  }

  return null;
};
