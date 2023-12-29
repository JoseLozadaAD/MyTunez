import { ThemeProvider } from '@mui/material';
import Content from '../layout/Content';
import Header from '../layout/Header';
import SideBar from '../layout/SideBar';
import { darkTheme } from '../../themes/theme';

const MyTunez = () => {
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
