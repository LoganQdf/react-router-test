import React from "react";
import { Route, Link } from "react-router-dom";

const Botom = ({ match }) => (
  <div>
    <h2>hello i'm Botom</h2>
      <ul>
        <li key={'1'}><Link to={`${match.url}/rendering`}>rendering 1</Link></li>
        <li key={'2'}><Link to={`${match.url}/components`}>components 2</Link></li>
        <li key={'3'}><Link to={`${match.url}/props-v-state`}>props-v-state</Link></li>
      </ul>
      <Route path={`${match.url}/:botomId`} component={BotomChild}/>
      <Route exact path={match.url} render={() => <h3>Please select a topic.</h3>}/>
  </div>
);

const BotomChild = ({ match }) => (
  <div>
    <h3>{match.params.botomId}123</h3>
  </div>
);

export default Botom;