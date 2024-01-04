import { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setShuffle } from '../../../store/player/playerSlice';
import type { RootState } from '../../../store/store';

const useShuffle = () => {
  const { shuffle } = useSelector((state: RootState) => state.player);
  const dispatch = useDispatch();

  const handleShuffle = useCallback(() => {
    dispatch(setShuffle(!shuffle));
  }, [shuffle, dispatch]);

  return { shuffle, handleShuffle };
};

export default useShuffle;
