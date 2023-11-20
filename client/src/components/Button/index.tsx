import React from 'react';
import {ButtonText, PrimaryButton, SecondaryButton, TextButton} from './styles';
import {GestureResponderEvent} from 'react-native';

interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
  variant?: 'primary' | 'secondary' | 'text';
  block?: boolean;
}

const logWrapper =
  (e: GestureResponderEvent) =>
  (fn: (event: GestureResponderEvent) => void) => {
    console.log('Button pressed');
    fn(e);
  };

const Button = ({
  onPress,
  text,
  variant = 'primary',
  block = false,
}: ButtonProps) => {
  if (variant === 'primary') {
    return (
      <PrimaryButton onPress={e => logWrapper(e)(onPress)} block={block}>
        <ButtonText>{text}</ButtonText>
      </PrimaryButton>
    );
  }

  if (variant === 'secondary') {
    return (
      <SecondaryButton onPress={e => logWrapper(e)(onPress)} block={block}>
        <ButtonText>{text}</ButtonText>
      </SecondaryButton>
    );
  }

  if (variant === 'text') {
    return (
      <TextButton onPress={e => logWrapper(e)(onPress)} block={block}>
        <ButtonText underline>{text}</ButtonText>
      </TextButton>
    );
  }
};

export default Button;
