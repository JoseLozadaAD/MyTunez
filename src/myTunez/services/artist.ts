import { ARTISTS } from '../../constants/localStorage';
import type { Artist } from '../../types/Types.type';

export const getArtistById = (id: number) => {
  const data = localStorage.getItem(ARTISTS);

  return data
    ? JSON.parse(data).find((artist: Artist) => artist.id === id)
    : [];
};
