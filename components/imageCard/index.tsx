import React, {FC} from 'react';
import Image from 'next/image';
import type {TMusic} from 'types';

interface Props {
  data: TMusic;
}
const ImageCard: FC<Props> = ({data}) => {
  return (
    <div className="w-auto  h-72 flex flex-col  rounded-lg border shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="relative w-full h-1/2">
        <Image
          priority
          layout="fill"
          objectFit="fill"
          className="rounded-t-lg absolute w-full h-36"
          src={data?.image_url!}
          alt={data?.title!}
        />
      </div>
      <div className="flex h-1/2 justify-center  text-center items-center flex-col p-3 ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data?.artist}
        </h5>
        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
          {data?.title}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {data?.release_year}
        </p>
      </div>
    </div>
  );
};

export {ImageCard};
