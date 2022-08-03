import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const Containrer = styled.div`
  max-width: 1300px;
  min-width: 300px;
  flex-wrap: wrap;
`;
export const CardContainer = styled.div`
  max-width: 1300px;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.5);
  margin-bottom: 15px;
  display: flex;
  padding: 10px;
`;
export const LinkFilm = styled(Link)`
  text-decoration: none;
`;
export const PosterFilm = styled.img`
  width: 150px;
`;
export const FilmDiscription = styled.div`
  padding-left: 20px;
`;
