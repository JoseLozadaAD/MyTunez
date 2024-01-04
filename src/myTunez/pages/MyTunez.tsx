import { ThemeProvider } from '@mui/material';

import Content from '../layout/Content';
import Header from '../layout/Header';
import SideBar from '../layout/SideBar';
import useMyTunez from './hooks/useMyTunez';

import { darkTheme, lightTheme } from '../../themes/theme';

const MyTunez = () => {
  const { theme } = useMyTunez();

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
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
