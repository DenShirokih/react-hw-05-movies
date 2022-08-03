import { Nav, Wrapper } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Wrapper>
      <Nav to="/">HomePage</Nav>
      <Nav to="movies">Movies</Nav>
    </Wrapper>
  );
};
