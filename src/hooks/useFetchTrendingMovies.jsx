import { getTrending } from 'services/apiService';
import { useEffect, useState } from 'react';

export const useFetchTrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function getFilms() {
      setLoading(true);
      try {
        const trendingFilms = await getTrending();
        setMovies(trendingFilms);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getFilms();
  }, []);
  return { movies, isLoading };
};
