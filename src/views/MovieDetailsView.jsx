import { useFetchDetailsOneFilm } from 'hooks/useFetchDetailsMovie';

import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Outlet } from 'react-router-dom';

const MovieDetailsView = () => {
  const { filmDetails } = useFetchDetailsOneFilm();

  return (
    <div>
      <MovieDetails filmDetails={filmDetails} />
      <Outlet />
    </div>
  );
};

export default MovieDetailsView;
