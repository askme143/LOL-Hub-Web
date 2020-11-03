import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Main from './view/main';
import Summoner from './view/summoner';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/summoner/:name" component={Summoner} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
