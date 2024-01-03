import { Song } from './Types.type';

export interface SongProps {
  number: number;
  song: Song;
  handleClick: (song: Song) => void;
}
