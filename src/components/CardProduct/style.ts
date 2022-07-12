import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 2;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 17px;
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
  align-items: flex-start;
  justify-content: space-around;

`;

export const Text = styled.Text`
 color: ${({ theme }) => theme.colors.cyan500};
 font-size: 15px;
 font-family: ${({ theme }) => theme.font.Poppions};
`;



export const Description = styled.Text`
  font-family: ${({ theme }) => theme.font.Roboto};
  text-align: left;
  color: ${({ theme }) => theme.colors.cyan500};
`

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.font.Roboto};
  font-size: 18px;

  color: ${({ theme }) => theme.colors.green};



`;
