import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { ThemeProvider } from '@mui/material';

import Content from '../layout/Content';
import Header from '../layout/Header';
import SideBar from '../layout/SideBar';
import { getSong, getVolume } from '../services/data';
import {
  setCurrentAlbum,
  setSong,
  setVolume,
} from '../store/player/playerSlice';

import { darkTheme } from '../../themes/theme';
import { getAlbumById } from '../services/album';

const MyTunez = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setVolume(getVolume()));

    if (getSong()) {
      dispatch(setSong(getSong()));
      dispatch(setCurrentAlbum(getAlbumById(getSong().albumId)));
    }
  }, [dispatch]);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="app">
        <Header />

        <div className="main">
          <SideBar />
          <Content />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MyTunez;
