import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Login';
import Audience from './Audience';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import {Route,BrowserRouter,Switch} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
    <div>
<Switch>
<Route exact path='/' component={App} />
<Route exact path='/login' component={Login} />
<Route exact path='/audience' component={Audience} />
</Switch>
    </div>
    </BrowserRouter>
  ,document.getElementById('root')
);
registerServiceWorker();