import { useCallback, useState } from 'react';

import { useDispatch } from 'react-redux';

import { getVolume, persist } from '../../../services/data';
import { setVolume } from '../../../store/player/playerSlice';

const useVolumeSlider = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(getVolume());

  const handleVolumeChange = useCallback(
    (event: Event) => {
      const { value } = event.target as HTMLInputElement;
      dispatch(setVolume(Number(value)));
      persist('volume', Number(value));
      setValue(value);
    },
    [setValue, dispatch],
  );

  return {
    handleVolumeChange,
    value,
  };
};

export default useVolumeSlider;
