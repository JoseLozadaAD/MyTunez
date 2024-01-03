import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setPause, setPlay } from '../../store/player/playerSlice';
import { Song as SongType } from '../../../types/Types.type';

const useSong = (handleClick: (song: SongType) => void, song: SongType) => {
  const dispatch = useDispatch();
  const {
    song: { id },
    isPlaying,
  } = useSelector((state: RootState) => state.player);

  const handleToggleClick = () => {
    handleClick(song);
    !isPlaying ? dispatch(setPlay()) : dispatch(setPause());
  };

  return {
    id,
    isPlaying,
    handleToggleClick,
  };
};

export default useSong;
