import { Theme } from '@mui/material';

export const bgPrimaryMain = {
  bgcolor: 'primary.main',
};

export const colorPrimaryMain = {
  color: 'primary.main',
};

export const bgPrimaryContrast = {
  bgcolor: 'primary.contrastText',
};

export const colorPrimaryContrast = {
  color: 'primary.contrastText',
};

export const bgSecondaryMain = {
  bgcolor: 'secondary.main',
};

export const colorSecondaryMain = {
  color: 'secondary.main',
};

export const bgSecondaryContrast = {
  bgcolor: 'secondary.contrastText',
};

export const colorSecondaryContrast = {
  color: 'secondary.contrastText',
};

export const bgSecondaryDark = {
  bgcolor: 'secondary.dark',
};

export const bgPrimaryDark = {
  bgcolor: 'primary.dark',
};

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

export const contentStyle = (theme: Theme) => ({
  bgcolor: 'secondary.main',

  '&::-webkit-scrollbar': {
    width: '5px',
  },
  '&::-webkit-scrollbar-track': {
    background: theme.palette.secondary.main,
  },
  '&::-webkit-scrollbar-thumb': {
    background: theme.palette.primary.dark,
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: theme.palette.primary.main,
  },
});

export const modalStyle = (theme: Theme) => ({
  bgcolor: 'secondary.light',
  border: `1px solid ${theme.palette.primary.contrastText}`,
});

export const closeModalStyle = {
  color: 'primary.contrastText',
  '&:hover': { color: 'secondary.contrastText' },
};

export const getStyles = (name: string, genders: string[], theme: Theme) => {
  return {
    color: genders.includes(name) ? theme.palette.primary.main : 'white',
    backgroundColor: theme.palette.secondary.main,
  };
};
