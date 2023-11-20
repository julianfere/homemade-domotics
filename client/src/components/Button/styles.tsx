import styled from 'styled-components/native';

type StyledButtonProps = {
  block: boolean;
};

type ButtonTextProps = {
  underline?: boolean;
};

export const BaseButton = styled.TouchableOpacity<StyledButtonProps>`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  width: ${({block}) => (block ? '100%' : '250px')};
  color: ${({theme}) => theme.text};
`;

export const SecondaryButton = styled(BaseButton)`
  background-color: ${({theme}) => theme.secondary} !important;
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: ${({theme}) => theme.primary} !important;
`;

export const TextButton = styled(BaseButton)`
  background-color: transparent !important;
  color: ${({theme}) => theme.text} !important;
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  color: ${({theme}) => theme.text};
  text-decoration: ${({underline}) => (underline ? 'solid underline' : 'none')};
`;
