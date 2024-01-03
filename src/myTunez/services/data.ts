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
    persist(key, newData);
  } else {
    persistSong(newData);
  }
};

const persistSong = (newData: FieldValues) => {
  let albums = getData(ALBUMS);
  const album = albums.find((item: Item) => item.id === newData.album);

  if (album) {
    album?.songs.push(newData);
    albums = albums.filter((item: Item) => item.id !== album.id);
    albums.push(album);
    localStorage.setItem(ALBUMS, JSON.stringify(albums));
  }
};

const persist = (key: string, newData: FieldValues) => {
  const existingData = localStorage.getItem(key);
  const data = existingData ? JSON.parse(existingData) : [];
  const id = new Date().getTime();
  data.push({ id, ...newData });
  const dataString = JSON.stringify(data);

  localStorage.setItem(key, dataString);
};
