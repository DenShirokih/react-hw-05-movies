import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const MovieImg = styled.img``;
export const MovieTitle = styled.h2``;

export const MovieLi = styled.li`
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.5);
  &:hover {
    transform: translate(-5px, -5px);
    transition-property: transform;
    transition-duration: 300ms;
  }

  width: 250px;
  text-align: center;
  margin: 20px;
`;
export const Nav = styled(Link)`
  text-decoration: none;

  font-size: 12px;
  font-family: Noto Sans;
`;
