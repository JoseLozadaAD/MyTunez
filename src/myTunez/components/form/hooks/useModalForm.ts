import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import { successAlert } from '../../../../utils/alerts';
import { capitalLetter, persistData } from '../../../../utils/methods';

const useModalForm = (nameStorage: string, handleClose: () => void) => {
  const formControl = useForm();
  const { reset, watch } = formControl;
  const watchAllFields = watch();
  const [isDisabled, setIsDisabled] = useState(true);

  const isFormFilled = Object.values(watchAllFields).every(
    (field) => field !== '' && field.length !== 0,
  );

  const { formState } = formControl;

  const onHandleSubmit = (data: FieldValues) => {
    persistData(nameStorage, data);
    reset();
    successAlert(`${capitalLetter(nameStorage)} created successfully`);
  };

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
