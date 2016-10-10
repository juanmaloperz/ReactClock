var React = require('react');

var Productos = React.createClass({
render: function(){
return(
  <div className="portada">
    <div className="integrantes">
    <img src={'http://res.cloudinary.com/dkr9ndsvc/image/upload/c_scale,r_1,w_2143/v1476113267/LOGO_ARZUL_pn8ecv.jpg'}/>
    </div>
   <img src={'http://res.cloudinary.com/dkr9ndsvc/image/upload/v1476131361/BLOQUESARZUL1_vq1s0t.jpg'}/>
   <img src={'http://res.cloudinary.com/dkr9ndsvc/image/upload/v1476138823/PRODUCTOS_ARZUL2_rqtoez.jpg'}/>
  </div>
)
}
});

module.exports = Productos;
