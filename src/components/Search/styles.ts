import styled from "styled-components/native";
import { TextInput } from "react-native";


export const Wrapper = styled.View`
  paddingHorizontal: 20px;

`;

export const Input = styled(TextInput)`
  height: 56px;
  background: ${({ theme }) => theme.colors.cyan200};
  border-radius: 8px;
  font-family: ${({ theme }) => theme.font.Roboto};
  position: relative;
  top: -20px;
  padding: 10px
`