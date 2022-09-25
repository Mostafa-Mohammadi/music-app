import React, {FC} from 'react';

interface Props {
  selectType: 'genre' | 'year';
  setFilters: React.Dispatch<React.SetStateAction<Object>>;
  label: string;
  children: React.ReactNode;
}
const SelectBox: FC<Props> = ({setFilters, selectType, label, children}) => {
  return (
    <div>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        {label}
      </label>
      <select
        onChange={e => {
          console.log(typeof e.target.value);
          setFilters(prev => ({
            ...prev,
            [selectType]: e.target.value,
          }));
        }}
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value={0}>Choose an option</option>
        {children}
      </select>
    </div>
  );
};

export {SelectBox};
