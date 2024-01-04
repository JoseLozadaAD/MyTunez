import { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../store/store';
import { setPause, setPlay } from '../../../store/player/playerSlice';

const useMediaPlayer = () => {
  const {
    isPlaying,
    song: { audioSrc },
  } = useSelector((state: RootState) => state.player);
  const dispatch = useDispatch();

  const handlePlay = useCallback(() => {
    if (audioSrc) {
      dispatch(setPlay());
    }
  }, [dispatch, audioSrc]);

  const handlePause = useCallback(() => {
    dispatch(setPause());
  }, [dispatch]);

  return {
    isPlaying,
    audioSrc,
    handlePlay,
    handlePause,
  };
};

export default useMediaPlayer;
