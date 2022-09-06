import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.red};
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
`;

export const WrapperHeader = styled.View`
  width: 100%;
  padding:10px;
  color: ${({ theme }) => theme.colors.white};
  margin: 20px 0px;
`;


export const Title = styled.Text`
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 60px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.Poppions};

`;

export const SubTitle = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.Poppions};
  margin: 20px 0px;
`

export const Form = styled.View`
  width: 100%;
  border-radius: 16px;
  margin-bottom: 90px;
  padding: 10px;

`

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#B7B7CC'
})`
  background: ${({ theme }) => theme.colors.cyan};
  border-radius: 10px;
  padding: 16px;
  font-size: 16px;
  margin-bottom: 10px;
  
`

export const Button = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.yellow};
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  margin-top: 10px;
  align-items: center;
  height: 50px;

`

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.Poppions};

`

export const ButtonHome = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.red};
`;