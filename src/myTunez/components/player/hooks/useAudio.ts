import { useEffect, useRef } from 'react';
import { RootState } from '../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTime } from '../../../store/player/playerSlice';
import { getSong } from '../../../services/data';
import { convertToSeconds } from '../../../../utils/methods';

const useAudio = (handleNext: () => void) => {
  const dispatch = useDispatch();
  const {
    isPlaying,
    volume,
    song: { audioSrc, currentTime, duration },
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
  }, [isPlaying, audioSrc]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  useEffect(() => {
    const currentAudioRef = audioRef.current;

    if (currentAudioRef && Number.isFinite(currentTime) && !isPlaying) {
      currentAudioRef.currentTime = currentTime;
    }
  }, [currentTime, isPlaying]);

  useEffect(() => {
    if (currentTime === convertToSeconds(duration)) {
      handleNext();
    }
  }, [currentTime, duration, handleNext]);

  useEffect(() => {
    const currentAudioRef = audioRef.current;

    if (!currentAudioRef) return;

    if (getSong && Number.isFinite(getSong().currentTime)) {
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
  }, [dispatch]);

  return {
    audioRef,
    audioSrc,
  };
};

export default useAudio;
