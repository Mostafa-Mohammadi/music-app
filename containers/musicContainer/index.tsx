//Methods
import useMusicMethod from 'hooks/useMusicMethod';

//Componenets
import ImageCard from 'components/imageCard';
import {Navbar} from 'components/navbar';

//Types
import type {TMusic} from 'types';

export const MusicContainer = () => {
  const {musicsList} = useMusicMethod();
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {musicsList?.videos.map((item: TMusic) => {
            return <ImageCard data={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
};
