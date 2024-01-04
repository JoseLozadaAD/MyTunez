import { useCallback, useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import { persistData } from '../../../services/data';
import { successAlert } from '../../../../utils/alerts';
import { capitalLetter } from '../../../../utils/methods';

const useModalForm = (nameStorage: string, handleClose: () => void) => {
  const formControl = useForm();
  const [isDisabled, setIsDisabled] = useState(true);

  const { reset, watch } = formControl;
  const watchAllFields = watch();

  const isFormFilled = Object.values(watchAllFields).every(
    (field) => field !== '' && field.length !== 0,
  );

  const { formState } = formControl;

  const onHandleSubmit = useCallback(
    (data: FieldValues) => {
      persistData(nameStorage, data);
      reset();
      successAlert(`${capitalLetter(nameStorage)} created successfully`);
    },
    [reset, nameStorage],
  );

  useEffect(() => {
    setIsDisabled(!isFormFilled || Boolean(!formState.errors) || false);
  }, [isFormFilled, formState.errors, setIsDisabled]);

  useEffect(() => {
    setIsDisabled(true);
  }, []);

  useEffect(() => {
    reset();
  }, [handleClose, reset]);

  return {
    formControl,
    isFormFilled,
    onHandleSubmit,
    isDisabled,
    setIsDisabled,
    ...formState,
    ...formControl,
  };
};

export default useModalForm;
