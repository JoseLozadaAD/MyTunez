import useAudio from './hooks/useAudio';
import usePrevNextSong from './hooks/usePrevNextSong';

const Audio = () => {
  const { handleNext } = usePrevNextSong();
  const { audioRef, audioSrc } = useAudio(handleNext);

  return <audio className="hide" ref={audioRef} src={audioSrc || ''} />;
};

export default Audio;
