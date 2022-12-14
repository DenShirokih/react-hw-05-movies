import { useFetchCreditsMovie } from 'hooks/useFetchCreditsMovie';
import { CardsList } from 'components/CastList/CastList';
const CastView = () => {
  const { cast, isLoading } = useFetchCreditsMovie();

  return (
    <>
      <CardsList cast={cast} isLoading={isLoading} />
    </>
  );
};

export default CastView;
