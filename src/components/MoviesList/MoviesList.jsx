import { MoviesCard } from 'components/MoviesCard/MoviesCard';
import { MoviesUl, Container } from './MoviesList.styled';
export const MoviesList = ({ movies, route }) => {
  return (
    <Container>
      <MoviesUl>
        {movies.map(movie => {
          return <MoviesCard key={movie.id} movies={movie} route={route} />;
        })}
      </MoviesUl>
    </Container>
  );
};
