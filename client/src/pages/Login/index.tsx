import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import Routes from '../../config/routes/indes';
import {RootStackParamList} from '../../../App';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Typography from '../../components/Typography';
import Input from '../../components/Input';

const Login = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, Routes.LOGIN>) => {
  return (
    <Container.Flex column gap={10}>
      <Typography.H1>H1</Typography.H1>
      <Typography.H2>H2</Typography.H2>
      <Typography.H3>H3</Typography.H3>
      <Typography>Normal</Typography>
      <Button
        block
        onPress={() => navigation.navigate(Routes.HOME)}
        text="Button"
      />
      <Button
        block
        variant="secondary"
        onPress={() => navigation.navigate(Routes.HOME)}
        text="Button"
      />
      <Button
        block
        variant="text"
        onPress={() => navigation.navigate(Routes.HOME)}
        text="Button"
      />
      <Input />
      <Input.Numeric />
    </Container.Flex>
  );
};

export default Login;
