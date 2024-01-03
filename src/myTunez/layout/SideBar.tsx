import { Box } from '@mui/material';

import Empty from '../components/Empty';
import Artist from '../components/Artist';
import Modal from '../components/modals/Modal';
import FloatButton from '../components/FloatButton';
import { useSideBar } from './hooks/useSideBar';
import { useModal } from './hooks/useModal';
import type { Artist as ArtistType } from '../../types/Types.type';

import {
  artistsStyle,
  bgPrimaryDark,
  bgSecondaryMain,
} from '../../themes/styles';

const SideBar = () => {
  const {
    artistsRef,
    hasVerticalScrollbar,
    theme,
    artists,
    handleArtistClick,
  } = useSideBar();
  const { open, handleOpen, handleClose } = useModal();

  return (
    <Box className="side-bar" sx={bgSecondaryMain}>
      <FloatButton handleOpen={handleOpen} />

      <Box className="artists" ref={artistsRef} sx={artistsStyle(theme)}>
        <Artist
          image="https://i1.sndcdn.com/avatars-89t1YFIylSQzj6bp-xRzvqA-t500x500.jpg"
          name="All Artists"
          onHandleClick={() => handleArtistClick(-1)}
        />
        {artists.length !== 0 ? (
          artists.map((artist: ArtistType) => (
            <Artist
              key={artist.id}
              image={artist.image}
              name={artist.name}
              onHandleClick={() => handleArtistClick(artist.id)}
            />
          ))
        ) : (
          <Empty message="No artists" />
        )}
      </Box>

      <Box
        className={`side-bar__separator ${hasVerticalScrollbar ? 'hide' : ''}`}
        sx={bgPrimaryDark}
      ></Box>

      <Modal open={open} handleClose={handleClose} />
    </Box>
  );
};

export default SideBar;
