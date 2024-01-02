import { useForm } from 'react-hook-form';

import { Box, Modal, useTheme } from '@mui/material';
import { Close } from '@mui/icons-material';

import FormField from '../form/FormField';
import FormButtons from '../form/FormButtons';
import FormFieldMultiSelect from '../form/FormFieldMultiSelect';
import { GENDERS } from '../../../constants/genders';
import type { ModalType } from '../../../types/Modal.type';

import { closeModalStyle, modalStyle } from '../../../themes/styles';

const ModalArtist = ({ open, handleClose }: ModalType) => {
  const theme = useTheme();

  const formControl = useForm();
  const { handleSubmit, reset } = formControl;

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
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <FormField
            name="name"
            defaultValue=""
            formControl={formControl}
            rules={{ required: 'This field is required' }}
          />

          <FormFieldMultiSelect
            name="genders"
            defaultValue={[]}
            formControl={formControl}
            rules={{ required: 'This field is required' }}
            items={GENDERS}
          />

          <FormField
            name="members"
            defaultValue=""
            formControl={formControl}
            rules={{ required: 'This field is required' }}
          />

          <FormField
            name="webSite"
            defaultValue=""
            formControl={formControl}
            rules={{ required: 'This field is required' }}
          />

          <FormField
            name="image"
            defaultValue=""
            formControl={formControl}
            rules={{ required: 'This field is required' }}
          />

          <FormButtons onReset={reset} />
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalArtist;
