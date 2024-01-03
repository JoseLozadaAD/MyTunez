import { useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';

import type { RootState } from '../../store/store';

const Audio = () => {
  const { isPlaying, audioSrc } = useSelector(
    (state: RootState) => state.player,
  );
  /* const audioSrc =
    'https://files.gospeljingle.com/uploads/music/2022/12/Foster_The_People_-_Pumped_Up_Kicks.mp3'; */
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

  /* const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.volume = Number(event.target.value) / 100;
    }
  }; */

  return <audio className="hide" ref={audioRef} src={audioSrc || ''} />;
};

export default Audio;
