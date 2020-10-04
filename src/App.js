import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Tab from './Components/Admin/Tab';
import EventTasks from './Components/EventTasks/EventTasks';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Registration from './Components/Registration/Registration';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});
  const [registerForm, setRegisterForm] = useState({});
  return (
    <UserContext.Provider value={[user, setUser, registerForm, setRegisterForm]} >
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/events">
            <EventTasks />
          </PrivateRoute>
          <PrivateRoute path="/registration">
            <Registration />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Tab />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider >
  );
}

export default App;
