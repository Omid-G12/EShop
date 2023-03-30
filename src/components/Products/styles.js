import { makeStyles } from 'tss-react/mui';

export default makeStyles()((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));