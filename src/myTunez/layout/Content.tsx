import { Box } from '@mui/material';

import Album from '../components/Album';
import { contentStyle } from '../../themes/styles';

const Content = () => {
  return (
    <Box className="content" sx={contentStyle}>
      <Album />
      <Album />
    </Box>
  );
};

export default Content;
