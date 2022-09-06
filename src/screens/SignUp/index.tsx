
import { Container, Title, SubTitle, Form, Input, Button, ButtonText, WrapperHeader, ButtonHome } from './styles';
import auth from '@react-native-firebase/auth';

import SopaIcon from '../../assets/sopa.svg';
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';

export function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { navigate } = useNavigation();


  async function handleSignUp() {
    if (!email && !password) return;

    try {
      await auth().createUserWithEmailAndPassword(email, password);
      navigate('SignIn');


      await AsyncStorage.setItem('@GoRestaurant:token', 'isLoggedIn')

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
      </WrapperHeader>

      <Form>
        <SubTitle>Crie sua conta e peça as melhores comida da região.</SubTitle>
        <Input placeholder='E-mail' onChangeText={(email) => setEmail(email)} />

        <Input placeholder='Password' onChangeText={(password) => setPassword(password)} />

        <Button onPress={handleSignUp}>
          <ButtonText style={{ color: '#C72828' }}>Criar uma conta</ButtonText>
        </Button>


      </Form>
      <ButtonHome onPress={() => navigate("SignIn")}>
        <ButtonText style={{ fontSize: 15 }}>Voltar para login</ButtonText>
      </ButtonHome>
    </Container>
  )
}