export interface AlbumProps {
  artist: string;
  title: string;
  year: number;
  image: string;
  onHandleClick: () => void;
}
