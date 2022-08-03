import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  background-color: aliceblue;
`;
export const Nav = styled(NavLink)`
  color: red;
  padding: 30px;
  text-decoration: none;
  &.active {
    color: blue;
  }
`;
