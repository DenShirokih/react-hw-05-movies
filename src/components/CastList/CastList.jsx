import { CastCards } from 'components/CastCards/CastCards';
import { Cards } from './CardList.styled';
export const CardsList = ({ cast, isLoading }) => {
  return (
    <Cards>
      {cast.map(({ cast_id, profile_path, name, character }) => {
        return (
          <CastCards
            key={cast_id}
            profile_path={profile_path}
            name={name}
            character={character}
          />
        );
      })}
    </Cards>
  );
};
