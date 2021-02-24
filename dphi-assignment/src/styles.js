import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    marginBottom: '30px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    background: 'transparent',
    boxShadow: 'none'
  },
  heading: {
    color: '#fff',
    margin: "5px 0px"
  },
  logo:{
      height: "50px",
      margin: "0 25px"
  },
  
}));
