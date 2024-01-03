import { Box, Modal, useTheme } from '@mui/material';
import { Close } from '@mui/icons-material';

import FormField from '../form/FormField';
import FormButtons from '../form/FormButtons';
import useModalForm from '../form/hooks/useModalForm';
import FormFieldMultiSelect from '../form/FormFieldMultiSelect';
import { GENDERS } from '../../../constants/genders';
import { required } from '../../../utils/methods';
import { ARTISTS } from '../../../constants/localStorage';
import type { ModalProps } from '../../../types/Modal.type';

import { closeModalStyle, modalStyle } from '../../../themes/styles';

const ModalArtist = ({ open, handleClose }: ModalProps) => {
  const theme = useTheme();

  const {
    formControl,
    reset,
    onHandleSubmit,
    handleSubmit,
    isDisabled,
    setIsDisabled,
  } = useModalForm(ARTISTS, handleClose);

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

export default ModalArtist;
