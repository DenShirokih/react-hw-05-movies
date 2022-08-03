import {
  Container,
  PosterFilm,
  NameFilm,
  MovieDescription,
  VoteAverage,
  Ganre,
  Navigations,
  Link,
} from './MovieDetails.styled';

import { IMG_URL } from 'services/apiService';
export const MovieDetails = ({ filmDetails }) => {
  const {
    name,
    title,
    poster_path,
    release_date,
    vote_average,
    overview,
    genres = [{ id: ``, name: '' }],
  } = filmDetails;

  return (
    <>
      <Container>
        <div>
          <PosterFilm src={IMG_URL + poster_path} alt={title ?? name} />
          <Navigations>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </Navigations>
        </div>

        <MovieDescription>
          <NameFilm>{title ?? name}</NameFilm>
          <p>Дата релизу : {release_date}</p>
          <VoteAverage>Середня кількість голосів : {vote_average}</VoteAverage>
          <Ganre>
            Жанр:
            {genres.map(ganre => (
              <li key={ganre.id}>{ganre.name}</li>
            ))}
          </Ganre>
          <p>{overview}</p>
        </MovieDescription>
      </Container>
    </>
  );
};
