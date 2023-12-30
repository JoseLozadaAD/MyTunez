import { Box } from '@mui/material';

import MediaPlayer from '../components/MediaPlayer';
import OptionsPlayer from '../components/OptionsPlayer';
import Search from '../components/Search';

import { bgSecondaryDark } from '../../themes/styles';

const Header = () => {
  return (
    <Box className="header" sx={bgSecondaryDark}>
      <MediaPlayer />
      <OptionsPlayer />
      <Search />
    </Box>
  );
};

export default Header;
