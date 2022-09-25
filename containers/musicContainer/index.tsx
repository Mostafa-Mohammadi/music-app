//Methods
import useMusicMethod from 'hooks/useMusicMethod';

//Componenets
import {ImageCard} from 'components/imageCard';
import {Navbar} from 'components/navbar';
import {SelectBox} from 'components/selectBox';

//Types
import type {TMusic, TGenere} from 'types';

export const MusicContainer = () => {
  const {musicsList, filterer, setFilters} = useMusicMethod();
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-3">
        <div className="flex justify-between">
          <div className="mb-5 w-1/3">
            <SelectBox
              label="Select a genre"
              selectType="genre"
              setFilters={setFilters}
            >
              {musicsList?.genres?.map((item: TGenere) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </SelectBox>
          </div>
          <div className="mb-5 w-1/3">
            <SelectBox
              label="Select a year"
              selectType="year"
              setFilters={setFilters}
            >
              {/* use new Set to remove years duplicatio */}
              {Array(
                ...new Set(
                  musicsList?.videos?.map((item: TMusic) => item.release_year),
                ),
              ).map((item: any) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </SelectBox>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {musicsList &&
            filterer(musicsList).map((item: TMusic) => {
              return <ImageCard data={item} key={item.id} />;
            })}
        </div>
      </div>
    </>
  );
};