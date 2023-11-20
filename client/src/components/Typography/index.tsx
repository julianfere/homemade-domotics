import React, {PropsWithChildren} from 'react';
import * as S from './styles';

interface TypographyProps {
  color?: string;
  weight?: 'bold' | 'normal' | 'light';
}

const buildTypography =
  (tag: keyof typeof S) =>
  (props: PropsWithChildren<TypographyProps>): React.JSX.Element => {
    const Component = S[tag];
    return <Component {...props}>{props.children}</Component>;
  };

const Typography = (props: PropsWithChildren<TypographyProps>) => (
  <S.BaseText>{props.children}</S.BaseText>
);

Typography.H1 = buildTypography('H1');
Typography.H2 = buildTypography('H2');
Typography.H3 = buildTypography('H3');

export default Typography;
