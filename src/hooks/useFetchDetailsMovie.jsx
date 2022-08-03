import { getDetalis } from 'services/apiService';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const useFetchDetailsOneFilm = () => {
  const [filmDetails, setFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  let { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      setIsLoading(true);
      try {
        const movieData = await getDetalis(movieId);
        setFilm(movieData);
      } catch (error) {
        // setError(error);
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, [movieId]);

  return { filmDetails, isLoading };
};
