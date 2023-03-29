import { makeStyles } from 'tss-react/mui';

export default makeStyles()(() => {
  return {
    root: {
      // maxWidth: 345, original width style
      maxWidth: '100%',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    cardActions: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    cardContent: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  }
});