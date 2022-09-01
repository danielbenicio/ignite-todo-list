import { globalCss } from './stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: '$body',
  },

  body: {
    background: '$gray600',
    overflowX: 'hidden',
    lineHeight: '22.4px',
  },

  button: {
    border: 'none',
    cursor: 'pointer',
  },
});
