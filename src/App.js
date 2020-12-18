import React, { Fragment, } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import AccountProfile from './components/AccountProfile';
import Home from './components/Home';

function App() {
  return (
    <>
      <Navbar/>
      <Container>
        <Switch>
          <Route
          exact
          path="/"
          render={ () => <Home/>}
          />
          <Route
          exact
          path="/account/profile"
          render={ () => <AccountProfile /> }
          />
        </Switch>
      </Container>
    </>
  );
}

export default App;
