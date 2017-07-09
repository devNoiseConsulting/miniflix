/*
Links tht provided help
https://medium.com/@ivanmontiel/changing-old-habits-in-react-router-4-8483ee5e087c
https://stackoverflow.com/questions/42992911/react-router-only-one-child
https://stackoverflow.com/questions/43973589/react-router-4-nested-components-not-working-properly?rq=1
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Upload from './components/Upload';
import Display from './components/Display';
import Callback from './components/Callback';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {requireAuth} from './utils/AuthService';

const Root = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Display}/>
          <Route exact path="/upload" component={Upload} onEnter={requireAuth}/>
          <Route exact path="/callback" component={Callback}/>
        </Switch>
      </Router>
    </div>
  )
}

ReactDOM.render(
  <Root/>, document.getElementById('root'));
registerServiceWorker();
