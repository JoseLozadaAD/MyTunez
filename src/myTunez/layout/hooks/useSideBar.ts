import { useEffect, useRef, useState } from 'react';

import { useTheme } from '@mui/material';
import { useDispatch } from 'react-redux';

import { getData } from '../../services/data';
import { setAlbums } from '../../store/album/albumSlice';
import { getAlbumByArtistId } from '../../services/album';

export const useSideBar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const artistsRef = useRef<HTMLDivElement>(null);
  const [hasVerticalScrollbar, setHasVerticalScrollbar] = useState(false);

  const artists = getData('artists') || [];

  const handleArtistClick = (artistId: number) => {
    const albums = getAlbumByArtistId(artistId);

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
