import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  buttonSubmit:{
      margin: "5px",
      padding: "10px"
  },
  SearchField:{
      background: "#fff",
      borderRadius: "5px"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    backgroundColor: "white",
    borderRadius: "5px"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
