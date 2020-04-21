import React, { Fragment } from 'react';
import {Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './App.css';
import 'foundation-sites/dist/css/foundation.min.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import MojaApp from './components/MojaApp';
import UiDesign from './components/UiDesign';
import Websites from './components/Websites';
import Default from './components/Default';
import AdminTemplates from './components/AdminTemplates';

function App() {
  return(
    <React.Fragment>
      <NavBar></NavBar>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/mojaapp' component={MojaApp}></Route>
        <Route path='/admintemplates' component={AdminTemplates}></Route>
        <Route path='/uidesign' component={UiDesign}></Route>
        <Route path='/websites' component={Websites}></Route>
        <Route render={()=><h1>404: Page Not Found</h1>}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;