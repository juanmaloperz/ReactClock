var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Historia = require('Historia');
var Productos = require('Productos');
var Contacto = require('Contacto');
var Socios = require('Socios');

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
<Route path="historia" component={Historia}></Route>
<Route path="productos" component={Productos}></Route>
<Route path="contacto" component={Contacto}></Route>
<IndexRoute component={Socios}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
