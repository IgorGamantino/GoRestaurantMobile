import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.red};
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.Poppions};

`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.Poppions};
  margin: 20px 0px;
`

export const Form = styled.View`
  width: 100%;
  margin-top: 20px;

`

export const Input = styled.TextInput`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 16px;
  font-size: 16px;
  margin-bottom: 10px;
  
`

export const Button = styled.View`
  background: ${({ theme }) => theme.colors.yellow};
  border-radius: 10px;
  padding: 16px;
  margin-top: 10px;
  align-items: center;
  height: 50px;

`

export const ButtonText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.red};
  font-family: ${({ theme }) => theme.font.Poppions};

`

export const Separator = styled.View`
 height: 1px;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  margin: 20px 0px;
`;
