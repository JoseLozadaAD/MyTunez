import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import { getAlbumById } from '../../services/album';
import { ALBUMS, THEME } from '../../../constants/localStorage';
import { setTheme } from '../../store/theme/themeSlice';
import { getData, getSong, getVolume, persist } from '../../services/data';
import {
  setCurrentAlbum,
  setSong,
  setVolume,
} from '../../store/player/playerSlice';
import { getArtistById } from '../../services/artist';

const useMyTunez = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setVolume(getVolume()));

    if (getSong()) {
      dispatch(setSong(getSong()));
    } else {
      const albums = getData(ALBUMS);
      const song = albums[0].songs[0];
      const { name } = getArtistById(albums[0].artist);
      persist('currentSong', {
        id: song.id,
        title: song.title,
        artistName: name,
        albumId: albums[0].id,
        albumTitle: albums[0].title,
        cover: albums[0].image,
        audioSrc: song.link,
        duration: song.duration,
        currentTime: 0,
      });
      dispatch(setSong(getSong()));
    }

    dispatch(setCurrentAlbum(getAlbumById(getSong().albumId)));
    dispatch(setTheme(getData(THEME)));
  }, [dispatch]);

  return {
    theme,
  };
};

export default useMyTunez;
