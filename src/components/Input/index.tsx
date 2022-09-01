import React, { InputHTMLAttributes } from 'react';

import { Container, StyledInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  size: number;
}

const Input: React.FC<InputProps> = ({ size, ...props }) => (
  <Container css={{ width: `${size}rem` }}>
    <StyledInput type="text" {...props} />
  </Container>
);

export default Input;
