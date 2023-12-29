import { Theme } from '@mui/material';

export const sliderStyles = {
  marginBottom: 0,

  '& .MuiSlider-thumb': {
    width: '4px',
    height: '4px',
  },
};

export const searchStyle = (theme: Theme) => ({
  bgcolor: 'secondary.light',
  border: `1px solid ${theme.palette.secondary.contrastText}`,
});

export const artistStyle = {
  '&:hover': {
    bgcolor: 'secondary.dark',
  },

  '&:hover .artist__name': {
    cursor: 'pointer',
    color: 'primary.contrastText',
  },
  '&:hover .artist__image': {
    opacity: 1,
  },
};

export const artistsStyle = (theme: Theme) => ({
  '&::-webkit-scrollbar': {
    width: '5px',
  },
  '&::-webkit-scrollbar-track': {
    background: theme.palette.secondary.main,
  },
  '&::-webkit-scrollbar-thumb': {
    background: theme.palette.primary.main,
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: theme.palette.primary.dark,
  },
});
