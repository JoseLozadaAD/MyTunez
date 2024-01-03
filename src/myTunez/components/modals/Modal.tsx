import { Box, Button, Modal as ModalUI, useTheme } from '@mui/material';

import type { ModalProps } from '../../../types/Modal.type';
import { closeModalStyle, modalStyle } from '../../../themes/styles';
import ModalArtist from './ModalArtist';
import { useModal } from '../../layout/hooks/useModal';
import { Close } from '@mui/icons-material';
import ModalSong from './ModalSong';
import ModalAlbum from './ModalAlbum';

const Modal = ({ open, handleClose }: ModalProps) => {
  const theme = useTheme();
  const {
    open: openArtist,
    handleClose: handleCloseArtist,
    handleOpen: handleOpenArtist,
  } = useModal();

  const {
    open: openSong,
    handleClose: handleCloseSong,
    handleOpen: handleOpenSong,
  } = useModal();

  const {
    open: openAlbum,
    handleClose: handleCloseAlbum,
    handleOpen: handleOpenAlbum,
  } = useModal();

  return (
    <>
      <ModalUI open={open} onClose={handleClose} className="modal">
        <Box className="modal__container" sx={modalStyle(theme)}>
          <Close
            fontSize="medium"
            className="close-modal"
            onClick={handleClose}
            sx={closeModalStyle}
          />
          <Button
            color="primary"
            className="modal__button"
            onClick={handleOpenArtist}
          >
            Add artist
          </Button>

          <Button
            color="primary"
            className="modal__button"
            onClick={handleOpenSong}
          >
            Add song
          </Button>

          <Button
            color="primary"
            className="modal__button"
            onClick={handleOpenAlbum}
          >
            Add album
          </Button>
        </Box>
      </ModalUI>

      <ModalArtist open={openArtist} handleClose={handleCloseArtist} />
      <ModalSong open={openSong} handleClose={handleCloseSong} />
      <ModalAlbum open={openAlbum} handleClose={handleCloseAlbum} />
    </>
  );
};

export default Modal;
