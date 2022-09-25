import {useQuery} from '@tanstack/react-query';
import {useState} from 'react';

//services
import {getMusicData} from 'services';

//Types
import type {IFilters} from 'types';

const useMusicMethod = () => {
  const [filters, setFilters] = useState<IFilters>({
    genre: '',
    search: '',
    year: 0,
  });

  const filterer = (data: {videos: Array<any>}) => {
    const {genre, search, year} = filters;
    if (!genre && !year && !search) return data.videos;
    return data.videos.filter(item => {
      let result = true;
      if (genre && genre != '0') {
        result = result && item.genre_id == genre;
      }
      if (search) {
        result = result && item.artist.includes(search);
      }
      if (year && year != 0) {
        result = result && item.release_year == year;
      }
      return result;
    });
  };

  // Becuase our list is large , instead of useQuery we could use useinfiniteQuery and infinitScroll for performance reason ,but our API dosen't support pagination
  const {data: musicsList} = useQuery(['music-list'], getMusicData, {
    cacheTime: 50000,
  });
  return {musicsList, filters, setFilters, filterer};
};

export default useMusicMethod;
