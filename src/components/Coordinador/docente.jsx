import {Container, FormControl,InputLabel,Input,Button} from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import MaterialTable from "material-table";
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const themes = createTheme({
  typography: {
    fontFamily: 'Georama', 
  },
});
const useStyles = makeStyles((theme) => ({  
  table: {
    width: 800,
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
    backgroundColor:'#C8C7C7',
  },
  containers:{
    backgroundColor: '#fff',
    
  },
  titulo:{
    backgroundColor: '#294d87',
    justifyContent: 'center',
    textAlign:'center',
    color:'#fff',
  },
  containerdatos:{
    padding: theme.spacing(5),
    fontFamily: 'fontFamily',
  },
  Button:{
    backgroundColor:'#000',
    color: '#fff',
    position: 'relative',
    width: '50%',
    height: '60px',
  },
  cont:{
    padding:'50px 0 0 0'
  },
  ContainerTabla:{
    marginTop:'-20px',
    paddingLeft:'40px',
    paddingRight:'40px',
  },
}));

const columnas = [
  {
    title:'CodDocente',
    field:'CodDocente'
  },
  {
    title:'Nombres',
    field:'Nombres'
  },
  {
    title:'ApPaterno',
    field:'ApPaterno'
  },
  {
    title:'ApMaterno',
    field:'ApMaterno'
  },
  {
    title:'Categoria',
    field:'Categoria'
  },
  {
    title:'Email',
    field:'Email'
  },
  {
    title:'Direccion',
    field:'Direccion'
  },
]

function validateEmail(email){
  const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
  return re.test(String(email).toLowerCase());
}

const RegistroDocente = () => {
  const classes = useStyles();
  const [books, setBooks] = useState([]); //table data
  const [CodDocente,setCodDocente] = useState("")
  const [Nombres,setNombres] = useState("")
  const [ApPaterno,setApellidoP] = useState("")
  const [ApMaterno,setApellidoM] = useState("")
  const [Email,setEmail] = useState("")
  const [Categoria,setCategoria] = useState("")
  const [Direccion,setDireccion] = useState("")
  const [aux,setAux] = useState("")

  useEffect(()=>{
    const getBooks = () =>{
      fetch('http://localhost:9000/docente')
      .then(res=>res.json())
      .then(res=>setBooks(res))
    }
    getBooks()
  },[])
  const handleDelete = (aux) => {

    console.log('http://localhost:9000/api/aea' + aux)
    const requestInit = {
        method: 'DELETE'
    }
    fetch('http://localhost:9000/api/' + aux, requestInit)
    .then(res => res.text())
    .then(res => console.log(res))

    //setListUpdated(true)
  }

  const handleSubmit = () => {
        //validación de los datos
        if (CodDocente === '' || Nombres === '' || ApPaterno === '' || ApMaterno === '' || Categoria === '' || Email === '' || Direccion === '') {
            alert('Todos los campos son obligatorios')
            return
        }
        let datos = {CodDocente,Nombres,ApPaterno,ApMaterno,Categoria,Email,Direccion}
        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(datos)
        }
        fetch('http://localhost:9000/api', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))
         
        setBooks(books)
        setCodDocente("")
        setNombres("")
        setApellidoP("")
        setApellidoM("")
        setEmail("")
        setCategoria("")
        setDireccion("")
        
        //reiniciando state de libro
    }
  return(
  <div className={classes.main}>
    <Container className={classes.cont} maxWidth="lg">
    <Grid container spacing={1} className={classes.containers}>
        <ThemeProvider theme={themes}>
        <Grid item sm={12} className={classes.titulo}>
        <h1>Registro de Docentes</h1>
        </Grid>
        <Grid item sm={12}  align="center">
          <Grid container spacing={2} className={classes.containerdatos}>
          <Typography variant="h6" gutterBottom>
            Datos del Docente
          </Typography>
            <Grid item sm={12}>
                <TextField
                  required
                  id="CodDocente"
                  name="CodDocente"
                  label="Codigo de docente"
                  fullWidth
                  autoComplete="name"
                  onChange={(e)=>{
                    setCodDocente(e.target.value)
                  }}
                />
              </Grid>
            <Grid item sm={4}>
                <TextField
                  required
                  id="Nombres"
                  name="Nombres"
                  label="Nombres"
                  fullWidth
                  autoComplete="name"
                  onChange={(e)=>{
                    setNombres(e.target.value)}}
                />
              </Grid>
            <Grid item sm={4}>
              <TextField
                required
                id="ApPaterno"
                name="ApPaterno"
                label="Apellido Paterno"
                fullWidth
                autoComplete="apellido"
                onChange={(e)=>{
                  setApellidoP(e.target.value)}}
              />
            </Grid>
            <Grid item sm={4}>
              <TextField
                 required
                 id="ApMaterno"
                 name="ApMaterno"
                 label="Apellido Materno"
                 fullWidth
                 autoComplete="apellido2"
                 onChange={(e)=>{
                  setApellidoM(e.target.value)}}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                id="Email"
                name="Email"
                label="Email"
                fullWidth
                autoComplete="correo1"
                onChange={(e)=>{
                  setEmail(e.target.value)}}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="Direccion"
                name="Direccion"
                label="Dirección"
                fullWidth
                autoComplete="Direccion"
                onChange={(e)=>{
                  setDireccion(e.target.value)}}
              />
            </Grid>
            <Grid item xs={6}>
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel id="Categoria" >Categoría</InputLabel>
              <Select
                 id="Categoria" onChange={(e)=>{
                  setCategoria(e.target.value)}}>
                <MenuItem value={'Ded. Excl.'}>Dedicación Exclusiva</MenuItem>
                <MenuItem value={'Asociado'}>Asociado Tiempo Completo</MenuItem>
                <MenuItem value={'Principal'}>Principal Tiempo Completo</MenuItem>
              </Select>
              <FormHelperText>Seleccione su categoría</FormHelperText>
          </FormControl>
          </Grid>
          <Grid item xs={6} align="right">
          <Button className={classes.Button}
          type = "submit" onClick={handleSubmit}
          fullWidth variant="contained" color="primary" >Guardar</Button>
          </Grid>
          </Grid>
        </Grid>
        
        <Grid container className={classes.ContainerTabla}>
          <Grid item xs={12}>
            <MaterialTable
            columns={columnas} 
            data={books} 
            title="Docentes Registrados"
            icons= {tableIcons}
            actions = {[{        
              icon:DeleteOutline,
              tooltip:'Eliminar docente',
              onClick: (e,rowData)=>{alert("¿Deseas eliminar al docente "+rowData.CodDocente+" ?")
                let a = rowData.CodDocente
                handleDelete(a)
                }
            }
            ]}
            localization={{
              header:{
                actions:"Acciones",
              },
            }}
            />
        </Grid>
        </Grid>
        </ThemeProvider>
      </Grid>
      </Container>
  </div>)
};

export default RegistroDocente;
