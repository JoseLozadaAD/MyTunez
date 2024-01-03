import { useEffect, useRef, useState } from 'react';

import { useTheme } from '@mui/material';
import { useDispatch } from 'react-redux';

import { getData } from '../../../utils/methods';
import { setAlbums } from '../../store/album/albumSlice';
import type { Album } from '../../../types/Types.type';

export const useSideBar = () => {
  const theme = useTheme();
  const artistsRef = useRef<HTMLDivElement>(null);
  const [hasVerticalScrollbar, setHasVerticalScrollbar] = useState(false);

  const dispatch = useDispatch();
  const artists = getData('artists') || [];

  const handleArtistClick = (artist: string) => {
    const albums =
      getData('albums').filter((album: Album) =>
        album.artist.startsWith(artist),
      ) || [];

    dispatch(setAlbums(albums));
  };

  useEffect(() => {
    const hasScrollbar =
      artistsRef.current?.scrollHeight &&
      artistsRef.current?.clientHeight &&
      artistsRef.current.scrollHeight > artistsRef.current.clientHeight;

    setHasVerticalScrollbar(hasScrollbar || false);
  }, [hasVerticalScrollbar]);

  return {
    artistsRef,
    hasVerticalScrollbar,
    theme,
    artists,
    handleArtistClick,
  };
};
