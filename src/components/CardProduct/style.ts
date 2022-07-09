import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 2;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  paddingHorizontal: 24px;
`;

export const List = styled.FlatList`

`;

export const Card = styled.View`
  height: 114px;
  width: 365px;
  background: ${({ theme }) => theme.colors.cyan200};
  margin-bottom: 16px;
  border-radius: 8px;
  flex-direction: row;
`;

export const WrapperImage = styled.View`
  background: ${({ theme }) => theme.colors.yellow};
  height: 114px;
  width: 114px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 90px;
  height: 90px;
  
  border-radius: 40px;

`;
export const WrapperText = styled.View`
  flex: 1;
  padding: 13px;
  align-items: center;
  justify-content: space-between;

`;

export const Text = styled.Text``;


export const Description = styled.Text`
  font-family: ${({ theme }) => theme.font.Roboto};
  text-align: center;
`

