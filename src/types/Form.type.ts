import { Dispatch, SetStateAction } from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';

export interface FormFieldProps {
  name: string;
  defaultValue?: string[] | string | number | boolean | number[];
  formControl: UseFormReturn<FieldValues, unknown, undefined>;
  rules?: Record<string, unknown>;
  items?: string[] | number[];
  isMultiSelect?: boolean;
  type?: string;
}

export interface FormButtonsProps {
  disabled?: boolean;
  onReset: () => void;
  setDisabled: Dispatch<SetStateAction<boolean>>;
}
