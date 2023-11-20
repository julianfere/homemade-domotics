import styled from 'styled-components/native';

type FlexProps = {
  column?: boolean;
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between';
  align?: 'flex-start' | 'flex-end' | 'center' | 'space-between';
  gap?: string;
  wrap?: boolean;
};

type StyledContainerProps = {
  backgroundColor?: string;
  height?: string;
  width?: string;
};

type FlexContainerProps = StyledContainerProps & FlexProps;

export const BaseContainer = styled.View<StyledContainerProps>`
  background: ${({theme, backgroundColor}) =>
    backgroundColor ?? theme.background};
  height: ${({height}) => height ?? '100%'};
  width: ${({width}) => width ?? '100%'};
`;

export const FlexConainer = styled(BaseContainer)<FlexContainerProps>`
  display: flex;
  flex-direction: ${({column}) => (column ? 'column' : 'row')};
  justify-content: ${({justify}) => justify ?? 'flex-start'};
  align-items: ${({align}) => align ?? 'flex-start'};
  gap: ${({gap}) => gap ?? '0'};
  flex-wrap: ${({wrap}) => (wrap ? 'wrap' : 'nowrap')};
`;
