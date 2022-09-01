import { styled } from '../../../../styles/stitches.config';

export const Container = styled('div', {
  marginTop: '4rem',

  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

export const Content = styled('div', {
  width: '46rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ToDoContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});

export const ToDoListHeader = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
});

export const CreatedTasks = styled('div', {
  display: 'flex',
  gap: '8px',

  span: {
    fontSize: '0.875',
    color: '$blue',
    fontWeight: 'bold',
  },

  div: {
    background: '$gray400',
    padding: '2px 8px',
    borderRadius: '30px',

    color: '$gray200',
    fontSize: '0.875',
    fontWeight: 'bold',
  },
});

export const CompletedTasks = styled('div', {
  display: 'flex',
  gap: '8px',

  span: {
    fontSize: '0.875',
    color: '$blue',
    fontWeight: 'bold',
  },

  div: {
    background: '$gray400',
    padding: '2px 8px',
    borderRadius: '30px',

    color: '$gray200',
    fontSize: '0.875',
    fontWeight: 'bold',
  },
});
