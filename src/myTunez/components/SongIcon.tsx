import { Pause, PlayArrow } from '@mui/icons-material';

import type { SongIconProps } from '../../types/SongIcon.type';

const SongIcon = ({ songId, currentId, isPlaying }: SongIconProps) =>
  songId === currentId && isPlaying ? (
    <Pause
      className={`icon-song ${songId === currentId ? 'show' : ''}`}
      sx={{ color: 'primary.main' }}
    />
  ) : (
    <PlayArrow
      className={`icon-song ${songId === currentId ? 'show' : ''}`}
      sx={{ color: 'primary.main' }}
    />
  );

export default SongIcon;
