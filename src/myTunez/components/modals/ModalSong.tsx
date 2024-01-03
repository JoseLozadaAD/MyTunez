import { Box, Modal, useTheme } from '@mui/material';
import { Close } from '@mui/icons-material';

import FormField from '../form/FormField';
import FormButtons from '../form/FormButtons';
import useModalForm from '../form/hooks/useModalForm';
import FormFieldMultiSelect from '../form/FormFieldMultiSelect';
import { getData, required } from '../../../utils/methods';
import { ARTISTS, SONGS } from '../../../constants/localStorage';
import type { Artist } from '../../../types/Types.type';
import type { ModalProps } from '../../../types/Modal.type';

import { closeModalStyle, modalStyle } from '../../../themes/styles';

const ModalSong = ({ open, handleClose }: ModalProps) => {
  const theme = useTheme();
  const artists = getData(ARTISTS) || [];

  const {
    formControl,
    reset,
    onHandleSubmit,
    handleSubmit,
    isDisabled,
    setIsDisabled,
  } = useModalForm(SONGS, handleClose);

  return (
    <Modal className="modal" open={open} onClose={handleClose}>
      <Box className="modal__container" sx={modalStyle(theme)}>
        <Close
          fontSize="medium"
          className="close-modal"
          onClick={handleClose}
          sx={closeModalStyle}
        />

        <Box
          component="form"
          className="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onHandleSubmit)}
        >
          <FormField
            name="title"
            defaultValue=""
            formControl={formControl}
            rules={required('title')}
          />

          <FormField
            name="genre"
            defaultValue=""
            formControl={formControl}
            rules={required('genre')}
          />

          <FormField
            name="year"
            defaultValue=""
            formControl={formControl}
            rules={required('year')}
            type="number"
          />

          <FormFieldMultiSelect
            name="artist"
            defaultValue={[]}
            formControl={formControl}
            rules={required('artist')}
            items={artists.map((artist: Artist) => artist.name)}
            isMultiSelect={false}
          />

          <FormField
            name="album"
            defaultValue=""
            formControl={formControl}
            rules={required('album')}
          />

          <FormField
            name="duration"
            defaultValue=""
            formControl={formControl}
            rules={required('duration')}
          />

          <FormField
            name="link"
            defaultValue=""
            formControl={formControl}
            rules={required('link')}
          />

          <FormButtons
            onReset={reset}
            disabled={isDisabled}
            setDisabled={setIsDisabled}
          />
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalSong;
