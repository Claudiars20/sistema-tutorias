import React from 'react'
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom'
import Coordinador from '../../../Pages/Coordinador';
import login from '../login';
const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={"/login"} component={login}></Route>
                <Route exact path={"/Coordinador"} component={Coordinador}></Route>
            </Switch>
        </Router>
    )
}

export default AppRouter
