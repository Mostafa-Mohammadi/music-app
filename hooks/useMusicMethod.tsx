import {useQuery} from '@tanstack/react-query';

//services
import {getMusicData} from 'services';

const useMusicMethod = () => {
  //TODO
  // Becuase our list is large , instead of useQuery we could use useinfinitequery and infinitScroll for performance reason ,but our API dosen't support pagination
  const {data: musicsList} = useQuery(['music-list'], getMusicData, {
    cacheTime: 50000,
  });
  return {musicsList};
};

export default useMusicMethod;
