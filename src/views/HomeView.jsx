import { useFetchTrendingMovies } from 'hooks/useFetchTrendingMovies';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const HomeView = () => {
  const { movies } = useFetchTrendingMovies();
  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={movies} route={'movies/'} />
    </div>
  );
};
