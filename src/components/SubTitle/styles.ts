import styled, { css } from 'styled-components/native'
import { SubTitleProps } from '.';



export const Text = styled.Text<SubTitleProps>`
  ${({ color, size, theme, paddingLeft }) => css`
  
    color: ${color === 'black' ? theme.colors.cyan500 : theme.colors.white};
    font-size: ${size};
    font-family: ${theme.font.Poppions};
    padding-left: ${paddingLeft}
  `}


`;