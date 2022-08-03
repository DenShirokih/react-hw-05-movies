import { ReviewCard, AuthorName, Content } from './Reviews.styled';
export const Reviews = ({ author, content }) => {
  return (
    <ReviewCard>
      <AuthorName>{author}</AuthorName>
      <Content>{content}</Content>
    </ReviewCard>
  );
};
