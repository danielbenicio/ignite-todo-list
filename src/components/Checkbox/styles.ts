import * as CheckboxRadix from '@radix-ui/react-checkbox';
import { styled } from '../../styles/stitches.config';

export const StyledCheckbox = styled(CheckboxRadix.Root, {
  all: 'unset',
  backgroundColor: '$gray100',
  width: '18px',
  height: '18px',
  borderRadius: '99px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid $purpleDark',

  variants: {
    isDone: {
      is: {
        backgroundColor: '$purpleDark',
        svg: {
          color: '$gray100',
        },
      },
    },
  },
});

const StyledIndicator = styled(CheckboxRadix.Indicator, {
  svg: {
    color: '$purpleDark',
  },
});

export const Flex = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '12px',
});

export const Label = styled('label', {
  color: '$gray100',
  fontSize: '14px',
  lineHeight: '19.6px',

  variants: {
    isDone: {
      is: { color: '$gray300', textDecoration: 'line-through' },
    },
  },

});

export const CheckboxIndicator = StyledIndicator;
