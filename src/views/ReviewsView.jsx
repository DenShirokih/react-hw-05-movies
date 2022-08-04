import { useFetchReviewsMovie } from 'hooks/useFetchReviewsMovie';
import { ReviewsContainer } from 'components/Reviews/Reviews.styled';
import { Reviews } from 'components/Reviews/Reviews';
const ReviewsView = () => {
  const { reviews } = useFetchReviewsMovie();


  return (
    <ReviewsContainer>
      {reviews.map(({ author, id, content }) => {
        return <Reviews key={id} author={author} content={content} />;
      })}
    </ReviewsContainer>
  );
};

export default ReviewsView;
