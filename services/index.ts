import axios from 'axios';

const MusicsUrl =
  'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/main/data/dataset.json';

export const getMusicData = async () => {
  const {data} = await axios.get(MusicsUrl);
  return data;
};
