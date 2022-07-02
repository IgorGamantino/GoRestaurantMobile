import React from 'react';

import { Text } from './styles';


export interface SubTitleProps {
  children: React.ReactNode;
  color?: 'black' | 'white';
  size?: number;
  paddingLeft?: number;


}

export function SubTitle({ children, color = 'black', size = 16, paddingLeft = 0 }: SubTitleProps) {
  return (
    <Text color={color} size={size} paddingLeft={paddingLeft}>{children}</Text>
  )
}