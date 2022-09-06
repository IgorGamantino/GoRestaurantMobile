import React, { useContext } from 'react'
import Logo from '../../assets/logo.svg';
import ExitImage from '../../assets/exit.svg';

import { Container, ExitButton, Wrapper } from './styles'
import { AuthContext } from '../../Context/authContext';
export function Header() {
  const { setIsLoggedIn } = useContext(AuthContext);
  return (
    <Container>
      <Wrapper>
        <Logo />
        <ExitButton onPress={() => setIsLoggedIn(false)}>
          <ExitImage />
        </ExitButton>
      </Wrapper>
    </Container>
  )
}