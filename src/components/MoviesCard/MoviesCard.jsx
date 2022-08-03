import { useLocation } from 'react-router-dom';
import { IMG_URL } from 'services/apiService';
import { MovieImg, MovieTitle, MovieLi, Nav } from './MoviesCard.styled';
export const MoviesCard = ({
  movies: { name, title, poster_path, id },
  route = '',
}) => {
  const location = useLocation();
  return (
    <MovieLi>
      <Nav to={`${route}${id}`} state={{ from: location }}>
        <MovieImg src={IMG_URL + poster_path} alt="" />
        <MovieTitle>{title ?? name}</MovieTitle>
      </Nav>
    </MovieLi>
  );
};
