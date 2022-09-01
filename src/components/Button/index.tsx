import React, { ButtonHTMLAttributes } from 'react';
import { PlusCircle } from 'phosphor-react';

import { StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <StyledButton {...props}>
    {children}
    <PlusCircle size={16} />
  </StyledButton>
);

export default Button;
