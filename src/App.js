import React from 'react';
import Navbar from "./components/Navbar";
import WhoAmIProfile from "./components/WhoAmIProfile";
import { Container } from "semantic-ui-react";
import { Switch, Route, } from "react-router-dom";

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route
          exact
          path="/"
          render={ () => <div>Home</div>}
        />
        <Route 
          exact
          path="/whoami/profile"
          render={ () => <WhoAmIProfile />}
        />
      </Switch>
    </Container>
  </>
)

export default App;