
import React from 'react';
import { Input, Wrapper } from "./styles";
import { TextInputProps } from "react-native"

interface SearchProps extends TextInputProps { }

export function Search({ ...res }: SearchProps) {
  return (
    <Wrapper>
      <Input placeholderTextColor="#B7B7CC" {...res} />
    </Wrapper>
  )
}