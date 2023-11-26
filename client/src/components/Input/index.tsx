import React from 'react';
import {StyledBaseInput} from './style';
import {useTheme} from 'styled-components';
import Numeric from './variants/Numeric';

export interface InputProps {
  widht?: string;
  height?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  cursorColor?: string;
}

const Input = (props: InputProps) => {
  const theme = useTheme();

  return (
    <StyledBaseInput
      {...props}
      cursorColor={props.cursorColor ?? theme.accent}
    />
  );
};

Input.Numeric = Numeric;

export default Input;
