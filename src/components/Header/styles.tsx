import styled from 'styled-components/native';


export const Container = styled.View`
  background: ${({ theme }) => theme.colors.red};
  height: 148px;
  padding: 24px;
  
  `

export const Wrapper = styled.SafeAreaView`
  flex-direction: row;
  justify-content: space-between;  
  align-items: center

`;