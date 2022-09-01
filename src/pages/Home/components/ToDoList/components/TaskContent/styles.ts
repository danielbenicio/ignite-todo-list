import { styled } from '../../../../../../styles/stitches.config';

export const Container = styled('div', {
  padding: '16px',

  background: '$gray500',
  borderRadius: '8px',
  display: 'flex',

  justifyContent: 'space-between',

  '& + &': {
    marginTop: '12px',
  },
});

export const TaskCheckContainer = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '12px',
  maxWidth: '40.625rem',
});

export const TrashButton = styled('button', {
  background: 'transparent',
  display: 'flex',
  alignItems: 'flex-start',

  svg: {
    color: '$gray300',
  },
});
