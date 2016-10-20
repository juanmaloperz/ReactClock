var React = require('react');

var Footer = React.createClass({
render: function(){
return(
  <div>
    <footer>
    <div>
     <p> email: asociacionarzul@gmail.com</p>
     <p> Municipio de El Zulia, Telefono:  <a href="tel://+573157826682">3157826682</a></p>
     <small> © Copyright 2016 , ARZUL</small>
     </div>
    </footer>
  </div>
)
}
});

module.exports = Footer;
