import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../store/store';
import { setPause, setPlay } from '../../../store/player/playerSlice';

const useMediaPlayer = () => {
  const {
    isPlaying,
    song: { audioSrc },
  } = useSelector((state: RootState) => state.player);
  const dispatch = useDispatch();

  const handlePlay = () => {
    if (audioSrc) {
      dispatch(setPlay());
    }
  };

  const handlePause = () => {
    dispatch(setPause());
  };

  return {
    isPlaying,
    audioSrc,
    handlePlay,
    handlePause,
  };
};

export default useMediaPlayer;
