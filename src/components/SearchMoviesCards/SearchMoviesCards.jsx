import {
  Containrer,
  CardContainer,
  LinkFilm,
  PosterFilm,
  FilmDiscription,
  FilmName,
} from './SearchMoviesCards.styled';
import { IMG_URL } from 'services/apiService';
import { useLocation } from 'react-router-dom';
export const SearchMoviesCards = ({ SearchMovies, route }) => {
  const location = useLocation();

  return (
    <Containrer>
      {SearchMovies.map(({ id, poster_path, release_date, original_title }) => {
        return (
          <LinkFilm to={`${id}`} state={{ from: location }}>
            <CardContainer key={id}>
              <PosterFilm
                src={
                  poster_path
                    ? `${IMG_URL + poster_path}`
                    : `https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png`
                }
                alt=""
              />
              <FilmDiscription>
                <FilmName>
                  {original_title} {release_date}
                </FilmName>
                <p> Дата релизу: {release_date}</p>
              </FilmDiscription>
            </CardContainer>
          </LinkFilm>
        );
      })}
    </Containrer>
  );
};
