import { Box } from '@mui/material';

import Search from '../components/Search';
import Audio from '../components/player/Audio';
import MediaPlayer from '../components/player/MediaPlayer';
import OptionsPlayer from '../components/player/OptionsPlayer';

import { bgSecondaryDark } from '../../themes/styles';
import SwitchTheme from '../components/SwitchTheme';

const Header = () => (
  <Box className="header" sx={bgSecondaryDark}>
    <MediaPlayer />
    <OptionsPlayer />
    <Search />
    <Audio />
    <SwitchTheme />
  </Box>
);

export default Header;
