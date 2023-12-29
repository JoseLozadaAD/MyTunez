import { Box, IconButton, InputBase, useTheme } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { searchStyle } from '../../themes/styles';

const Search = () => {
  const theme = useTheme();

  return (
    <Box className="search" sx={searchStyle(theme)}>
      <InputBase className="search__input" placeholder="Search" />
      <IconButton type="button" aria-label="search">
        <SearchIcon sx={{ color: 'primary.contrastText' }} />
      </IconButton>
    </Box>
  );
};

export default Search;
