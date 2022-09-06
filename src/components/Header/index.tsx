import React from 'react'
import Logo from '../../assets/logo.svg';
import ExitImage from '../../assets/exit.svg';

import { Container, Wrapper } from './styles'
export function Header() {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <ExitImage />
      </Wrapper>
    </Container>
  )
}