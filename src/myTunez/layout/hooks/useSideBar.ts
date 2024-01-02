import { useEffect, useRef, useState } from 'react';

import { useTheme } from '@mui/material';

export const useSideBar = () => {
  const theme = useTheme();
  const artistsRef = useRef<HTMLDivElement>(null);
  const [hasVerticalScrollbar, setHasVerticalScrollbar] = useState(false);

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
  };
};
