import React from 'react';
import * as CheckboxRadix from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

import {
  StyledCheckbox,
  CheckboxIndicator,
  Flex,
  Label,
} from './styles';

interface CheckboxProps extends
   React.ForwardRefExoticComponent<CheckboxRadix.CheckboxProps
    & React.RefAttributes<HTMLButtonElement>> {
  children: string;
  isDone?: 'is';
}

const Checkbox: React.FC<CheckboxProps> = ({ children, isDone, ...rest }) => (
  <form>
    <Flex>
      <StyledCheckbox {...rest} isDone={isDone}>
        <CheckboxIndicator>
          <Check size={12} />
        </CheckboxIndicator>
      </StyledCheckbox>
      <Label isDone={isDone}>
        {children}
      </Label>
    </Flex>
  </form>
);

export default Checkbox;
