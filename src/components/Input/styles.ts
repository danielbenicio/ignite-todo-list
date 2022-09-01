import { styled } from '../../styles/stitches.config';

export const Container = styled('div', {});

export const StyledInput = styled('input', {
  width: '100%',
  height: '3.375rem',

  background: '$gray500',
  borderRadius: '8px',
  padding: '16px',
  border: '1px solid $gray700',
  outline: 'transparent',

  color: '$gray100',

  '&:focus': {
    border: '1px solid $purpleDark',
  },
});
