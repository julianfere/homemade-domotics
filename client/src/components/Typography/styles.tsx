import styled from 'styled-components/native';

type TypographyProps = {
  color?: string;
  weight?: 'bold' | 'normal' | 'light';
};

export const BaseText = styled.Text<TypographyProps>`
  font-size: 16px;
  color: ${props => props.color ?? props.theme.text};
`;

export const H1 = styled(BaseText)`
  font-size: 40px;
  font-weight: ${({weight}) => weight ?? 'normal'};
`;

export const H2 = styled(BaseText)`
  font-size: 32px;
  font-weight: ${({weight}) => weight ?? 'normal'};
`;

export const H3 = styled(BaseText)`
  font-size: 24px;
  font-weight: ${({weight}) => weight ?? 'normal'};
`;
