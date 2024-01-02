import { Box, Button, Modal as ModalUI, useTheme } from '@mui/material';

import type { ModalType } from '../../../types/Modal.type';
import { closeModalStyle, modalStyle } from '../../../themes/styles';
import ModalArtist from './ModalArtist';
import { useModal } from '../../layout/hooks/useModal';
import { Close } from '@mui/icons-material';

const Modal = ({ open, handleClose }: ModalType) => {
  const theme = useTheme();
  const {
    open: openArtist,
    handleClose: handleCloseArtist,
    handleOpen: handleOpenArtist,
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

          <Button color="primary" className="modal__button">
            Add album
          </Button>

          <Button color="primary" className="modal__button">
            Add song
          </Button>
        </Box>
      </ModalUI>

      <ModalArtist open={openArtist} handleClose={handleCloseArtist} />
    </>
  );
};

export default Modal;
