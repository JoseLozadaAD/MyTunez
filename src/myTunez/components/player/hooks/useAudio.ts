import { useEffect, useRef } from 'react';
import { RootState } from '../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTime } from '../../../store/player/playerSlice';
import { getSong } from '../../../services/data';

const useAudio = () => {
  const dispatch = useDispatch();
  const {
    isPlaying,
    volume,
    song: { audioSrc, currentTime },
  } = useSelector((state: RootState) => state.player);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  useEffect(() => {
    const currentAudioRef = audioRef.current;

    if (currentAudioRef) {
      currentAudioRef.currentTime = currentTime;
    }
  }, [currentTime]);

  useEffect(() => {
    const currentAudioRef = audioRef.current;

    if (!currentAudioRef) return;

    if (getSong) {
      currentAudioRef.currentTime = getSong().currentTime;
    }

    const updateTime = () => {
      if (currentAudioRef.currentTime !== 0) {
        dispatch(setCurrentTime(Math.floor(currentAudioRef.currentTime)));
      }
    };

    currentAudioRef.addEventListener('timeupdate', updateTime);

    return () => {
      currentAudioRef.removeEventListener('timeupdate', updateTime);
    };
  }, []);

  return {
    audioRef,
    audioSrc,
  };
};

export default useAudio;
