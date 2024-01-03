import { FieldValues } from 'react-hook-form';

export const capitalLetter = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);

export const required = (value: string) => ({
  required: `${capitalLetter(value)} is required`,
});

export const persistData = (key: string, newData: FieldValues) => {
  const existingData = localStorage.getItem(key);
  const data = existingData ? JSON.parse(existingData) : [];

  const id = new Date().getTime();

  data.push({ id, ...newData });

  const dataString = JSON.stringify(data);

  localStorage.setItem(key, dataString);
};

export const getData = (key: string) => {
  const data = localStorage.getItem(key);

  return data ? JSON.parse(data) : [];
};
