import useAudio from './hooks/useAudio';

const Audio = () => {
  const { audioRef, audioSrc } = useAudio();

  return <audio className="hide" ref={audioRef} src={audioSrc || ''} />;
};

export default Audio;
