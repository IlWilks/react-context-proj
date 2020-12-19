import React, { Fragment, } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import AccountProfile from './components/AccountProfile';
import Home from './components/Home';
import Particles from 'react-tsparticles';

function App() {
  return (
    <>
      <Navbar/>
      <Container className= "test" id="welcome">
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
      <Particles id="tsparticles"
        options={{
          background: {
            color: {
              value: "#1f5bb5",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }} />
      
    </>
  );
}

export default App;
