import { Box } from '@mui/material';

import Artist from '../components/Artist';
import FloatButton from '../components/FloatButton';
import Modal from '../components/modals/Modal';
import { useSideBar } from './hooks/useSideBar';

import {
  artistsStyle,
  bgPrimaryDark,
  bgSecondaryMain,
} from '../../themes/styles';
import { useModal } from './hooks/useModal';

const artists = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//  const artists = [1, 2, 3, 4, 5, 6];

const SideBar = () => {
  const { artistsRef, hasVerticalScrollbar, theme } = useSideBar();
  const { open, handleOpen, handleClose } = useModal();

  return (
    <Box className="side-bar" sx={bgSecondaryMain}>
      <FloatButton handleOpen={handleOpen} />

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
