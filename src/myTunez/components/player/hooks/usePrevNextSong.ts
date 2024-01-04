import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../store/store';
import {
  setCurrentTime,
  setPause,
  setPlay,
  setSong,
} from '../../../store/player/playerSlice';
import type { Album, Song } from '../../../../types/Types.type';

const usePrevNextSong = () => {
  const {
    currentAlbum,
    song: { id, artistName, albumTitle, cover, albumId, currentTime },
  } = useSelector((state: RootState) => state.player);
  const dispatch = useDispatch();

  const changeSong = (song: Song) => {
    dispatch(setPause());
    dispatch(
      setSong({
        id: song.id,
        title: song.title,
        audioSrc: song.link,
        artistName,
        albumId,
        albumTitle,
        cover,
        duration: song.duration,
        currentTime: 0,
      }),
    );
    dispatch(setPlay());
  };

  const handleNext = () => {
    const album: Partial<Album> = { ...currentAlbum };

    if (album.songs) {
      const limit = album.songs.length;
      const songs = album.songs;
      const index = songs?.findIndex((song: Song) => song.id === id);
      const nextSong = songs[(index + 1) % limit];

      if (nextSong) {
        changeSong(nextSong);
      }
    }
  };

  const handlePrev = () => {
    const album: Partial<Album> = { ...currentAlbum };

    if (album.songs) {
      const limit = album.songs.length;
      const songs = album.songs;
      const index = songs?.findIndex((song: Song) => song.id === id);
      const prevSong = songs[(index - 1 + limit) % limit];

      if (prevSong && currentTime < 10) {
        changeSong(prevSong);
      } else {
        dispatch(setPause());
        dispatch(setCurrentTime(0));
        setTimeout(() => {
          dispatch(setPlay());
        }, 100);
      }
    }
  };

  return {
    handleNext,
    handlePrev,
  };
};

export default usePrevNextSong;
