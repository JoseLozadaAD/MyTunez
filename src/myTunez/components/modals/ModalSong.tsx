import { Box, Modal, useTheme } from '@mui/material';
import { Close } from '@mui/icons-material';

import FormField from '../form/FormField';
import FormButtons from '../form/FormButtons';
import useModalForm from '../form/hooks/useModalForm';
import FormFieldMultiSelect from '../form/FormFieldMultiSelect';
import { getData } from '../../services/data';
import { required } from '../../../utils/methods';
import { GENDERS } from '../../../constants/genders';
import { ALBUMS, ARTISTS, SONGS } from '../../../constants/localStorage';
import type { Album, Artist } from '../../../types/Types.type';
import type { ModalProps } from '../../../types/Modal.type';

import { closeModalStyle, modalStyle } from '../../../themes/styles';

const ModalSong = ({ open, handleClose }: ModalProps) => {
  const theme = useTheme();
  const artists = getData(ARTISTS) || [];
  const albums = getData(ALBUMS) || [];

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

          <FormFieldMultiSelect
            name="gender"
            defaultValue={[]}
            formControl={formControl}
            rules={required('gender')}
            items={GENDERS}
            isMultiSelect={false}
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
            items={artists.map((artist: Artist) => ({
              id: artist.id,
              name: artist.name,
            }))}
            isMultiSelect={false}
          />

          <FormFieldMultiSelect
            name="album"
            defaultValue={[]}
            formControl={formControl}
            rules={required('album')}
            items={albums.map((album: Album) => ({
              id: album.id,
              name: album.title,
            }))}
            isMultiSelect={false}
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
