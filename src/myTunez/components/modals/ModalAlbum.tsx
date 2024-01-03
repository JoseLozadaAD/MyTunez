import { Close } from '@mui/icons-material';
import { Box, Modal, useTheme } from '@mui/material';

import FormField from '../form/FormField';
import FormButtons from '../form/FormButtons';
import useModalForm from '../form/hooks/useModalForm';
import FormFieldMultiSelect from '../form/FormFieldMultiSelect';
import { getData } from '../../services/data';
import { GENDERS } from '../../../constants/genders';
import { required } from '../../../utils/methods';
import { ALBUMS, ARTISTS } from '../../../constants/localStorage';
import type { Artist } from '../../../types/Types.type';
import type { ModalProps } from '../../../types/Modal.type';

import { closeModalStyle, modalStyle } from '../../../themes/styles';

const ModalAlbum = ({ open, handleClose }: ModalProps) => {
  const theme = useTheme();
  const artists = getData(ARTISTS) || [];

  const {
    formControl,
    reset,
    onHandleSubmit,
    handleSubmit,
    isDisabled,
    setIsDisabled,
  } = useModalForm(ALBUMS, handleClose);

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
            name="genders"
            defaultValue={[]}
            formControl={formControl}
            rules={required('genders')}
            items={GENDERS}
          />

          <FormField
            name="year"
            defaultValue=""
            formControl={formControl}
            rules={required('year')}
            type="number"
          />

          <FormField
            name="image"
            defaultValue=""
            formControl={formControl}
            rules={required('image')}
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

export default ModalAlbum;
