import { Text, View } from "react-native";

import { Container, Title, SubTitle, Form, Input, Button, ButtonText, Separator } from './styles';

import SopaIcon from '../../assets/sopa.svg';

export function SignIn() {
  return (
    <Container>
      <Title>GoRestaurant</Title>

      <SopaIcon />

      <SubTitle>Uma verdadeira experiência Italiana.</SubTitle>

      <Form>
        <Input placeholder='User' />
        <Input placeholder='Password' />

        <Button>
          <ButtonText>Entrar</ButtonText>
        </Button>

      </Form>

      <Separator />
    </Container>
  )
}