import { useDispatch } from 'react-redux';

import { persistVolume } from '../../../services/data';
import { setVolume } from '../../../store/player/playerSlice';

const useVolumeSlider = () => {
  const dispatch = useDispatch();

  const handleVolumeChange = (event: Event) => {
    const { value } = event.target as HTMLInputElement;
    dispatch(setVolume(Number(value)));
    persistVolume(Number(value));
  };

  return {
    handleVolumeChange,
  };
};

export default useVolumeSlider;
