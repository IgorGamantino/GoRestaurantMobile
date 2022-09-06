
import { Container, Title, SubTitle, Form, Input, Button, ButtonText, WrapperHeader, ButtonCreateAccount, TextButtonCreateAccount } from './styles';
import auth from '@react-native-firebase/auth';

import SopaIcon from '../../assets/sopa.svg';
import { useContext, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../Context/authContext';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { navigate } = useNavigation();
  const { setIsLoggedIn } = useContext(AuthContext);

  async function handleSignIn() {
    if (!email && !password) return;

    try {
      await auth().signInWithEmailAndPassword(email, password);
      setIsLoggedIn(true);

      navigate('Home');
    }
    catch (error) {
      console.log(error);
    }
  }


  return (
    <Container>
      <WrapperHeader>
        <SopaIcon />
        <Title>GoRestaurant</Title>


        <SubTitle>Uma verdadeira experiência Italiana.</SubTitle>
      </WrapperHeader>

      <Form>
        <Input placeholder='E-mail' onChangeText={(email) => setEmail(email)} />

        <Input placeholder='Password' onChangeText={(password) => setPassword(password)} />

        <Button onPress={handleSignIn}>
          <ButtonText>Entrar</ButtonText>
        </Button>

      </Form>
      <SubTitle>ou</SubTitle>
      <ButtonCreateAccount onPress={() => navigate('SignUp')}>
        <TextButtonCreateAccount>Criar uma conta</TextButtonCreateAccount>
      </ButtonCreateAccount>
    </Container>
  )
}