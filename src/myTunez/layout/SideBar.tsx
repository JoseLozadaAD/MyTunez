import { useEffect, useRef, useState } from 'react';

import { Box, useTheme } from '@mui/material';

import Artist from '../components/Artist';
import FloatButton from '../components/FloatButton';

import {
  artistsStyle,
  bgPrimaryDark,
  bgSecondaryMain,
} from '../../themes/styles';

const artists = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//  const artists = [1, 2, 3, 4, 5, 6];

const SideBar = () => {
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

  return (
    <Box className="side-bar" sx={bgSecondaryMain}>
      <FloatButton />

      <Box className="artists" ref={artistsRef} sx={artistsStyle(theme)}>
        <Artist
          image="https://i1.sndcdn.com/avatars-89t1YFIylSQzj6bp-xRzvqA-t500x500.jpg"
          name="All Artists"
          onHandleClick={() => {}}
        />
        {artists.map(() => (
          <Artist
            image="https://i1.sndcdn.com/avatars-89t1YFIylSQzj6bp-xRzvqA-t500x500.jpg"
            name="Nirvana"
            onHandleClick={() => {}}
          />
        ))}
        Fl
      </Box>

      <Box
        className={`side-bar__separator ${hasVerticalScrollbar ? 'hide' : ''}`}
        sx={bgPrimaryDark}
      ></Box>
    </Box>
  );
};

export default SideBar;
