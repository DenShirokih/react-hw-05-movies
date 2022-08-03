import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1300px;
  margin: 0 auto;
  margin-bottom: 20px;
  & p {
    margin-bottom: 10px;
  }
`;
export const PosterFilm = styled.img`
  width: 400px;
  margin-bottom: 20px;
`;
export const NameFilm = styled.h2`
  font-size: 40px;
  line-height: 40px;
  margin-bottom: 10px;
`;

export const MovieDescription = styled.div`
  flex-basis: 60%;
`;

export const VoteAverage = styled.p`
  margin-bottom: 10px;
`;
export const Ganre = styled.ul`
  list-style: square inside;
  margin-bottom: 10px;
`;
export const Navigations = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Link = styled(NavLink)`
  color: red;
  padding: 15px;
  text-decoration: none;
  &.active {
    color: blue;
  }
  :hover {
    opacity: 0.85;
  }
`;
