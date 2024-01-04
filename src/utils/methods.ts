export const capitalLetter = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);

export const required = (value: string) => ({
  required: `${capitalLetter(value)} is required`,
});

export const convertToSeconds = (time: string) => {
  const [minutes, seconds] = time.split(':').map(Number);

  return minutes * 60 + seconds;
};

export const convertToMinutesAndSeconds = (timeInSeconds: number) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);

  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};
