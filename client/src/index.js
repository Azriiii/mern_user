import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import App from './App';
import Register from './Screens/Register.jsx';
import Activate from './Screens/Activate.jsx';
import Admin from './Screens/Admin.jsx';
import Private from './Screens/Private.jsx';
import PrivateRoute from './Routes/PrivateRoute';
import AdminRoute from './Routes/AdminRoute';
import ResetPassword from './Screens/ResetPassword';

import 'react-toastify/dist/ReactToastify.css';
import Login from './Screens/Login.jsx';
import ForgetPassword from './Screens/ForgetPassword';


ReactDOM.render(

  

<BrowserRouter>
    <Switch>
    <Route path='/' exact render={props => <Login {...props} />} />
    <Route path='/login' exact render={props => <Login {...props} />} />      
      <Route path='/register' exact render={props => <Register {...props} />} />      
      <Route path='/users/activate/:token' exact render={props => <Activate {...props} />} />
      <Route path='/users/password/forget' exact render={props => <ForgetPassword {...props} />} />      
      <Route path='/users/password/reset/:token' exact render={props => <ResetPassword {...props} />} />
      <PrivateRoute path="/private" exact component={Private} />
       <AdminRoute path="/admin" exact component={Admin} />

      <Redirect to='/' />
    </Switch>
  </BrowserRouter>,


  
  document.getElementById('root')
);

