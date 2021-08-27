import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    useLocation
  } from "react-router-dom";
import RegistroDocente from "../components/Coordinador/docente.jsx";
import RegistroAlumno from "../components/Coordinador/alumno.jsx";
import { IntlProvider } from 'react-intl';
import Layout from '../components/Coordinador/layoutCoordinador.jsx';
import styled from "styled-components";
import '../styles/aside.scss';

const Pages = styled.div`
  margin-left: 270px;
  height: 100%;
  width: auto;
  position: relative;
  background: #C8C7C7;
  overflow: auto;
  z-index: 1;
`;

function Coordinador() {
    const location = useLocation();
    return (
        <> 
        <IntlProvider>
        <Layout/>
        </IntlProvider> 
        <Pages>
            <Switch>
                <Route exact path="/"></Route>
                <Route path="/coordinador/docentes">
                  <RegistroDocente></RegistroDocente>
                </Route>
                <Route path="/coordinador/estudiantes">
                  <RegistroAlumno></RegistroAlumno>
                </Route>
            </Switch>
        </Pages>
        </>  
    );
  }
  
  export default Coordinador;
  