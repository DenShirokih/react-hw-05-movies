import styled from '@emotion/styled';
export const Input = styled.input`
  max-width: 500px;
  font: inherit;
  font-size: 20px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;

  margin-bottom: 20px;
`;
