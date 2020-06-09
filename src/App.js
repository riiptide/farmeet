import React from 'react';
import {LandingPage} from "./LandingPage/landingpage";
import {Route, Switch} from 'react-router';
import {Search} from "./search/search";


function App() {
  return (
      <Switch>
          <Route path = '/search'  component = {Search}/>
          <Route path = '/' component = {LandingPage}/>

      </Switch>


  );
}

export default App;
