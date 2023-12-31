import { FieldValues } from 'react-hook-form';

import { ALBUMS, SONGS } from '../../constants/localStorage';
import type { Item } from '../../types/Form.type';

export const getData = (key: string) => {
  const data = localStorage.getItem(key);

  return data ? JSON.parse(data) : [];
};

export const persistData = (key: string, newData: FieldValues) => {
  if (key === ALBUMS) {
    newData.songs = [];
  }

  if (key !== SONGS) {
    persistOtherSongs(key, newData);
  } else {
    persistSong(newData);
  }
};

export const getVolume = () => {
  const volume = localStorage.getItem('volume');

  return volume ? JSON.parse(volume) : 100;
};

export const getSong = () => {
  const song = localStorage.getItem('currentSong');

  return song ? JSON.parse(song) : null;
};

export const persist = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const persistSong = (newData: FieldValues) => {
  const id = new Date().getTime();
  let albums = getData(ALBUMS);
  const album = albums.find((item: Item) => item.id === newData.album);

  if (album) {
    album?.songs.push({ id, ...newData });
    albums = albums.filter((item: Item) => item.id !== album.id);
    albums.push(album);
    localStorage.setItem(ALBUMS, JSON.stringify(albums));
  }
};

const persistOtherSongs = (key: string, newData: FieldValues) => {
  const existingData = localStorage.getItem(key);
  const data = existingData ? JSON.parse(existingData) : [];
  const id = new Date().getTime();
  data.push({ id, ...newData });
  const dataString = JSON.stringify(data);

  localStorage.setItem(key, dataString);
};
