import { useEffect, useState } from 'react';
import { getSearchMovies } from 'services/apiService';

export const useFetchSearchMovies = searchQuery => {
  const [MoviesBySearch, setMoviesBySearch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    async function getMovies() {
      setIsLoading(true);
      try {
        const films = await getSearchMovies(searchQuery);
        if (films.results.length === 0) {
          return alert(
            `Nothing was found for the query "${searchQuery}", please specify your query)`
          );
        }
        setMoviesBySearch(films.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [searchQuery]);
  return { MoviesBySearch, isLoading };
};
