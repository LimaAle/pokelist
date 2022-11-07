import React from 'react';
import { Container, ContentText } from './styles';
interface props {
  text: string;
  color: string;
  isBold?: boolean;
  isDark?: boolean;
  large?:boolean;
}
export default function RectangleInfo({ text, color, isBold, isDark, large }: props) {
  return (
    <Container color={color} large={large}>
      <ContentText isBold={isBold} isDark={isDark} large={large}>{text}</ContentText>
    </Container>
  );
}