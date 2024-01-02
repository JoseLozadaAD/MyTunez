import { FieldValues, UseFormReturn } from 'react-hook-form';

export interface FormFieldProps {
  name: string;
  defaultValue: string[] | string | number | boolean | number[];
  formControl: UseFormReturn<FieldValues, unknown, undefined>;
  rules?: Record<string, unknown>;
  items?: string[] | number[];
}

export interface FormButtonsProps {
  onReset: () => void;
}
