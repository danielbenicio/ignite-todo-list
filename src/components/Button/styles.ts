import { styled } from '../../styles/stitches.config';

export const StyledButton = styled('button', {
  width: '5.625rem',

  background: '$blueDark',
  borderRadius: '8px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  transition: '1s',

  gap: '8px',

  color: '$gray100',
  fontWeight: 'bold',

  svg: {
    color: '$gray100',
  },

  '&:hover': {
    background: '$blue',
  },
});
