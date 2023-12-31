import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setPlay } from '../../store/player/playerSlice';
import { Song as SongType } from '../../../types/Types.type';
import { useCallback } from 'react';

const useSong = (handleClick: (song: SongType) => void, song: SongType) => {
  const dispatch = useDispatch();
  const {
    song: { id },
    isPlaying,
  } = useSelector((state: RootState) => state.player);

  const handleToggleClick = useCallback(() => {
    handleClick(song);
    dispatch(setPlay());
  }, [handleClick, dispatch, song]);

  return {
    id,
    isPlaying,
    handleToggleClick,
  };
};

export default useSong;
