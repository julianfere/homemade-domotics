import React, {PropsWithChildren} from 'react';
import {BaseContainer, FlexConainer} from './styles';

interface ContainerProps {
  backgroundColor?: string;
  height?: string;
  width?: string;
}

interface FlexibleContainerProps extends ContainerProps {
  column?: boolean;
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between';
  align?: 'flex-start' | 'flex-end' | 'center' | 'space-between';
  gap?: string;
  wrap?: boolean;
}

const Container = (props: PropsWithChildren<ContainerProps>) => (
  <BaseContainer {...props}>{props.children}</BaseContainer>
);

const FlexibleContainer = (
  props: PropsWithChildren<FlexibleContainerProps>,
) => <FlexConainer {...props}>{props.children}</FlexConainer>;

Container.Flex = FlexibleContainer;

export default Container;
