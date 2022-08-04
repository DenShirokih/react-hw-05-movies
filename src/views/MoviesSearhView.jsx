import { useEffect, useState } from 'react';
import { useSearchParams, Outlet } from 'react-router-dom';
import { useFetchSearchMovies } from 'hooks/useFetchSearchMovies';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { SearchMoviesCards } from 'components/SearchMoviesCards/SearchMoviesCards';

const MoviesSearhView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const { MoviesBySearch } = useFetchSearchMovies(searchQuery);

  const currentSearchQuery = searchParams.get('query');

  useEffect(() => {
    if (currentSearchQuery) {
      setSearchQuery(currentSearchQuery);
    }
  }, [currentSearchQuery]);

  const searchHandler = query => {
    setSearchQuery(query);
    setSearchParams({ query: query });
  };

  return (
    <>
      <SearchBar searchHandler={searchHandler} />
      <SearchMoviesCards SearchMovies={MoviesBySearch} route={'movies/'} />
      <Outlet />
    </>
  );
};
export default MoviesSearhView;
