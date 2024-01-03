import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

import Empty from '../components/Empty';
import Album from '../components/Album';
import type { RootState } from '../store/store';
import type { Album as AlbumType } from '../../types/Types.type';

import { contentStyle } from '../../themes/styles';

const Content = () => {
  const { albums } = useSelector((state: RootState) => state.albums);

  return (
    <Box className="content" sx={contentStyle}>
      {albums.length !== 0 ? (
        albums.map((album: AlbumType) => (
          <Album
            key={album.id}
            artist={album.artist}
            title={album.title}
            year={album.year}
            image={album.image}
            onHandleClick={() => {}}
          />
        ))
      ) : (
        <Empty message="No albums" />
      )}
    </Box>
  );
};

export default Content;
