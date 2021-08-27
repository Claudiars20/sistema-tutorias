import logo from './logo.svg';
import './App.css';
import HomeMenu from './components/Login/login_choose.jsx';
import Login from './components/Login/login.jsx';
import Coordinador from './Pages/Coordinador'
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Layout from './components/Coordinador/layoutCoordinador.jsx';
const useStyles = makeStyles((theme) => ({  
  table: {
    minWidth: 700,
  },
  formControl: {
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  name:{
    marginTop: theme.spacing(5),
    textAlign: 'center',
  },
  as:
  {
    position: 'relative',
    margin: '#fff',
  },
  mainGrid: {
    flex : 1,
  },
  main:{
    width:'100%',
  },
  containers:{
    backgroundColor: '#fff',
    marginTop: '40px',
  },
  titulo:{
    backgroundColor: '#99CCFF',
    paddingBottom: theme.spacing(10),
    paddingTop: theme.spacing(4),
    justifyContent: 'center',
    textAlign:'center',
  },
  containerdatos:{
    margin: theme.spacing(5),
    widht: '300px',
    fontFamily: 'fontFamily',
  },
  Button:{
    marginTop: theme.spacing(2),
    backgroundColor:'#000',
    color: '#fff',
    position: 'relative',
  },
  ContainerTabla:{
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(10),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <Switch>
      <Route path="/" exact>
        <HomeMenu/>
      </Route>
      <Route path="/login" exact>
        <Login/>
      </Route>
      <Coordinador></Coordinador>
      </Switch>
    </Router>
  );
}

export default App;
