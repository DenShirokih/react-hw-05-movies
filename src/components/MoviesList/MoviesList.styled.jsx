import styled from '@emotion/styled';

export const MoviesUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  & :hover {
    transform: translate(-5px, -5px);
  }
`;
export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;
