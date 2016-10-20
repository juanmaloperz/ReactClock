var React = require('react');
var HoverBox = require("react-hoverbox");

var Socios = React.createClass({

render: function(){
return(
    <div className="portada">
       <div className="integrantes">
       <img src={'http://res.cloudinary.com/dkr9ndsvc/image/upload/c_scale,r_1,w_2143/v1476113267/LOGO_ARZUL_pn8ecv.jpg'}/>
       </div>
        <div className="partner">
         <h1> Nuestros Socios </h1>
        </div>
       <div className="logos">
          <a href="http://zuligres.com"> <img src={'http://res.cloudinary.com/dkr9ndsvc/image/upload/c_pad,h_200,w_250/v1476905720/LOGO_ARCILLAS_ZULIGRES1-2_witqgy.jpg'} className="lovely hover"/> </a>
        <a href="http://tejarsantamaria.com"> <img src={'http://res.cloudinary.com/dkr9ndsvc/image/upload/c_pad,h_200,w_250/v1476994336/LOGO_TEJAR_SANTA_MARIA1_jjqdqq.jpg'} className="lovely hover"/> </a>
        <a href="http://www.ladrilleramerkagres.com"> <img src={'http://res.cloudinary.com/dkr9ndsvc/image/upload/c_pad,h_200,w_250/v1476898128/LOGO_MERKAGRES1_jwqpik.jpg'} className="lovely hover"/> </a>
        <a href="http://arcillassansimon.com/"> <img src={'http://res.cloudinary.com/dkr9ndsvc/image/upload/c_pad,h_200,w_250/v1476898234/LOGO_ARCILLAS_SAN_SIMO%CC%81N1_oyd4pz.jpg'} className="lovely hover"/> </a>
        <a href="http://www.arcillasdecolombia.com"> <img src={'http://res.cloudinary.com/dkr9ndsvc/image/upload/c_pad,h_200,w_250/v1476897901/LOGO_ARCILLAS_DE_COLOMBIA1_m2fdxy.jpg'} className="lovely hover"/> </a>
        <a href=""> <img src={'http://res.cloudinary.com/dkr9ndsvc/image/upload/c_pad,h_200,w_250/v1476897708/LOGO_ARCILLAS_CASTILLA1_kmppki.jpg'} className="lovely hover"/> </a>
        <a href=""> <img src={'http://res.cloudinary.com/dkr9ndsvc/image/upload/c_pad,h_200,w_250/v1476903126/LOGO_ARCILLAS_BERACA_sk3pl9.jpg'} className="lovely hover"/> </a>
          <a href=""> <img src={'http://res.cloudinary.com/dkr9ndsvc/image/upload/c_pad,h_200,w_250/v1476903811/LOGO_ARCILLAS_PRODUCTIVAS_E_INDUSTRIALES_S.A.S.1_la9xt2.jpg'} className="lovely hover"/> </a>
         <a href=""> <img src={'http://res.cloudinary.com/dkr9ndsvc/image/upload/c_pad,h_200,w_250/v1476904622/LOGO_LADRILLERA_SOLO_BARRO1_hr1zru.jpg'} className="lovely hover"/> </a>
    </div>
  </div>
)
}
});

module.exports = Socios;
