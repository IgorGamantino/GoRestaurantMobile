import styled from 'styled-components/native';



export const List = styled.ScrollView`
  flex: 1;
  padding-left: 8px;
  margin-top: 16px;
  height: 128px;
  /* width:100%; */
`

export const Card = styled.View`
  width: 120px;
  height: 128px;
  background: ${({ theme }) => theme.colors.cyan200};
  margin-left: 16px;
  border-radius: 8px;
  padding: 16px;
  justify-content: center;
  align-items: center; 
`;


export const CategoryName = styled.Text`
  font-family: ${({ theme }) => theme.font.Roboto};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.cyan500};
  margin-top: 25px;



`;