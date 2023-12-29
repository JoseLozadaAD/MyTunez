import { Box } from '@mui/material';

import MediaPlayer from '../components/MediaPlayer';
import OptionsPlayer from '../components/OptionsPlayer';
import Search from '../components/Search';

const Header = () => {
  return (
    <Box className="header" sx={{ bgcolor: 'secondary.dark' }}>
      <MediaPlayer />
      <OptionsPlayer />
      <Search />
    </Box>
  );
};

export default Header;
