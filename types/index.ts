export type TMusic = {
  id?: number | null;
  artist?: string | null;
  title?: string | null;
  release_year?: number | null;
  genre_id?: number | null;
  image_url?: string | null;
};

export interface IFilters {
  search?: string;
  genre?: number | string;
  year?: number | string;
}

export type TGenere = {
  id: string;
  name: string;
};
