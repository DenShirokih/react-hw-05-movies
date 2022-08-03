import { IMG_URL } from 'services/apiService';
import { Profile, Name, CardContainer } from './CastCards.styled';
export const CastCards = ({ profile_path, name, character }) => {
  return (
    <CardContainer>
      <Profile
        src={
          profile_path
            ? `${IMG_URL + profile_path}`
            : `https://img.icons8.com/ios/452/user-not-found.png`
        }
        alt={name}
      />
      <Name>{name}</Name>
      <p>{character}</p>
    </CardContainer>
  );
};
