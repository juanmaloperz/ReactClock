var React = require('react');

var Productos = React.createClass({
render: function(){
return(
  <div>
    <div className="integrantes">
    <img src={'http://res.cloudinary.com/dkr9ndsvc/image/upload/c_scale,r_1,w_2143/v1476113267/LOGO_ARZUL_pn8ecv.jpg'}/>
    </div>
      <ul class="horizontal menu" data-magellan>
      <li><a href="#first">Bloque, Bloquelon y Ladrillo</a></li>
      <li><a href="#second">Tablon,Tableta y Tejas</a></li>
      <li><a href="#third">Mallas decorativas</a></li>
    </ul>
    <div class="sections">
      <section id="first" data-magellan-target="first">
         <img src={'http://res.cloudinary.com/dkr9ndsvc/image/upload/v1476131361/BLOQUESARZUL1_vq1s0t.jpg'}/>
      </section>
      <section id="second" data-magellan-target="second">
           <img className="medio" src={'http://res.cloudinary.com/dkr9ndsvc/image/upload/v1476138823/PRODUCTOS_ARZUL2_rqtoez.jpg'}/>
      </section>
      <section id="third" data-magellan-target="third">Third Section</section>
    </div>
  </div>
)
}
});

module.exports = Productos;
