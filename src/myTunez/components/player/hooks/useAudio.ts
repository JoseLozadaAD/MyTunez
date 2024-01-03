import { useEffect, useRef } from 'react';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';

const useAudio = () => {
  const {
    isPlaying,
    volume,
    song: { audioSrc },
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

  return {
    audioRef,
    audioSrc,
  };
};

export default useAudio;
