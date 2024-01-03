export const capitalLetter = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);

export const required = (value: string) => ({
  required: `${capitalLetter(value)} is required`,
});
