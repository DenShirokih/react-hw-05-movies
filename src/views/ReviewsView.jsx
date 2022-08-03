import { useFetchReviewsMovie } from 'hooks/useFetchReviewsMovie';
import { ReviewsContainer } from 'components/Reviews/Reviews.styled';
import { Reviews } from 'components/Reviews/Reviews';
export const ReviewsView = () => {
  const { reviews, isLoading } = useFetchReviewsMovie();
  console.log(reviews);

  return (
    <ReviewsContainer>
      {reviews.map(({ author, id, content }) => {
        return <Reviews key={id} author={author} content={content} />;
      })}
    </ReviewsContainer>
  );
};
