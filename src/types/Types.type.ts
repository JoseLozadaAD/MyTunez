export interface Artist {
  id: string;
  image: string;
  name: string;
  genders: string;
  webSite: string;
  members: string;
}

export interface Song {
  id: string;
  title: string;
  genre: string;
  year: number;
  artist: string;
  album: string;
  duration: string;
  link: string;
}

export interface Album {
  id: string;
  title: string;
  genre: string;
  year: number;
  artist: string;
  image: string;
}
