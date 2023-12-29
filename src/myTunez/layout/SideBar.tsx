import { Box } from '@mui/material';

const SideBar = () => {
  return (
    <Box className="side-bar" sx={{ bgcolor: 'secondary.main' }}>
      <Box className="side-bar__artists"></Box>
      <Box
        className="side-bar__separator"
        sx={{ bgcolor: 'secondary.contrastText' }}
      ></Box>
    </Box>
  );
};

export default SideBar;
