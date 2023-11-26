import React from 'react';
import {StyledBaseInput} from '../../style';
import {useTheme} from 'styled-components';

interface InputProps {
  widht?: string;
  height?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  cursorColor?: string;
}

const Numeric = (props: InputProps) => {
  const theme = useTheme();

  return (
    <StyledBaseInput
      {...props}
      keyboardType="numeric"
      cursorColor={props.cursorColor ?? theme.accent}
    />
  );
};

export default Numeric;
