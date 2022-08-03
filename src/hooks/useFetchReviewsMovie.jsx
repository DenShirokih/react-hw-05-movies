import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/apiService';

export const useFetchReviewsMovie = () => {
  const [reviews, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let { movieId } = useParams();

  useEffect(() => {
    async function getMovies() {
      setIsLoading(true);
      try {
        const review = await getReviews(movieId);
        setReview(review.results);
      } catch (error) {
        console.log(error.message, 'ERROR by useFatchReviewsOfTheFilm');
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [movieId]);

  return { reviews, isLoading };
};
