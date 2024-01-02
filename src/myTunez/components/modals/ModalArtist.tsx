import { FieldValues, useForm } from 'react-hook-form';

import { Box, Modal, useTheme } from '@mui/material';
import { Close } from '@mui/icons-material';

import FormField from '../form/FormField';
import FormButtons from '../form/FormButtons';
import FormFieldMultiSelect from '../form/FormFieldMultiSelect';
import { GENDERS } from '../../../constants/genders';
import { ARTISTS } from '../../../constants/localStorage';
import { persistData, required } from '../../../utils/methods';
import type { ModalType } from '../../../types/Modal.type';

import { closeModalStyle, modalStyle } from '../../../themes/styles';
import { successAlert } from '../../../utils/alerts';

const ModalArtist = ({ open, handleClose }: ModalType) => {
  const theme = useTheme();

  const formControl = useForm();
  const { handleSubmit, reset } = formControl;

  const onHandleSubmit = (data: FieldValues) => {
    persistData(ARTISTS, data);
    reset();
    successAlert('Artist created successfully');
  };

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
            name="name"
            defaultValue=""
            formControl={formControl}
            rules={required('name')}
          />

          <FormFieldMultiSelect
            name="genders"
            defaultValue={[]}
            formControl={formControl}
            rules={required('genders')}
            items={GENDERS}
          />

          <FormField
            name="members"
            defaultValue=""
            formControl={formControl}
            rules={required('members')}
          />

          <FormField
            name="webSite"
            defaultValue=""
            formControl={formControl}
            rules={required('webSite')}
          />

          <FormField
            name="image"
            defaultValue=""
            formControl={formControl}
            rules={required('image')}
          />

          <FormButtons onReset={reset} />
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalArtist;
