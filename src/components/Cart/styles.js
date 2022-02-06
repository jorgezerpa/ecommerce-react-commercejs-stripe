import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '7%',
    [theme.breakpoints.down('xs')]: {
      marginTop: '50px',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '70px',
    },
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
  loading: {
    marginTop: '100px',
    marginLeft: '2rem',
    fontSize:'3rem',
  }

}));