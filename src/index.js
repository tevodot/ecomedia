import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import VideoRegister from './pages/register/Video/index';
import Page404 from './pages/NotFound'
import CategoryRegister from './pages/register/Categoria';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cadastro/video" component={VideoRegister} />
      <Route path="/cadastro/categoria" component={CategoryRegister} />
      <Route component={Page404} />
        
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
