import { useFetchDetailsOneFilm } from 'hooks/useFetchDetailsMovie';

import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { NavLink, Outlet } from 'react-router-dom';

export const MovieDetailsView = () => {
  const { filmDetails, isLoading } = useFetchDetailsOneFilm();

  return (
    <div>
      <MovieDetails filmDetails={filmDetails} />
      <Outlet />
    </div>
  );
};
