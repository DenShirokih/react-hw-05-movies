import { movieCredits } from 'services/apiService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useFetchCreditsMovie = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setLoading] = useState(false);
  let { movieId } = useParams();
  useEffect(() => {
    async function getCast() {
      setLoading(true);
      try {
        const castData = await movieCredits(movieId);
        setCast(castData.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getCast();
  }, [movieId]);
  return { cast, isLoading };
};
