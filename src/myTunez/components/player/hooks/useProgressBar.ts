import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { persist } from '../../../services/data';
import { convertToMinutesAndSeconds } from '../../../../utils/methods';
import type { RootState } from '../../../store/store';
import { setCurrentTime, setPause } from '../../../store/player/playerSlice';

const useProgressBar = () => {
  const dispatch = useDispatch();
  const { song } = useSelector((state: RootState) => state.player);
  const [time, setTime] = useState<string>('0:00');

  const { duration, currentTime } = song;

  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    dispatch(setCurrentTime(newValue));
    dispatch(setPause());
  };

  useEffect(() => {
    setTime(convertToMinutesAndSeconds(Number(currentTime)));
    if (currentTime !== 0) {
      persist('currentSong', song);
    }
  }, [currentTime, song]);

  useEffect(() => {
    setTime(convertToMinutesAndSeconds(Number(currentTime)));
  }, []);

  return {
    time,
    duration,
    currentTime,
    handleSliderChange,
  };
};

export default useProgressBar;
