import { Typography, useTheme } from '@mui/material';

const Empty = ({ message }: { message: string }) => {
  const theme = useTheme();

  return (
    <Typography
      variant="h6"
      component="div"
      color={theme.palette.primary.contrastText}
      className="empty"
    >
      {message}
    </Typography>
  );
};

export default Empty;
