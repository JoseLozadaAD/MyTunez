export interface Genre {
  id: number;
  name: string;
}

export interface Artist {
  id: number;
  image: string;
  name: string;
  genres: Genre[];
  webSite: string;
  members: string;
}

export interface Song {
  id: number;
  title: string;
  genre: string;
  year: number;
  artist: number;
  album: number;
  duration: number;
  link: string;
}

export interface Album {
  id: number;
  title: string;
  genres: Genre[];
  year: number;
  artist: number;
  image: string;
  songs?: Song[];
}
