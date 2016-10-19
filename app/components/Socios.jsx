var React = require('react');
var HoverBox = require("react-hoverbox");

var Socios = React.createClass({

render: function(){
return(
   <div className="portada">
       <div className="integrantes">
       <img src={'http://res.cloudinary.com/dkr9ndsvc/image/upload/c_scale,r_1,w_2143/v1476113267/LOGO_ARZUL_pn8ecv.jpg'}/>
       </div>
       <div>
        <h1> Nuestros Socios </h1>
       </div>
       <div className="logos">
          <a href="http://zuligres.com"> <img src={'http://res.cloudinary.com/dkr9ndsvc/image/upload/c_scale,h_134/v1476127910/zuligres_mbhujr.jpg'} className="lovely hover"/> </a>
        <a href="http://tejarsantamaria.com"> <img src={'http://res.cloudinary.com/dkr9ndsvc/image/upload/v1476129072/santamaria_gdlp5q.jpg'} className="lovely hover"/> </a>
        <a href="http://www.ladrilleramerkagres.com"> <img src={'http://res.cloudinary.com/dkr9ndsvc/image/upload/v1476898128/LOGO_MERKAGRES1_jwqpik.jpg'} className="lovely hover"/> </a>
        <a href="http://arcillassansimon.com/"> <img src={'http://res.cloudinary.com/dkr9ndsvc/image/upload/v1476898234/LOGO_ARCILLAS_SAN_SIMO%CC%81N1_oyd4pz.jpg'} className="lovely hover"/> </a>
        <a href="http://www.arcillasdecolombia.com"> <img src={'http://res.cloudinary.com/dkr9ndsvc/image/upload/v1476897901/LOGO_ARCILLAS_DE_COLOMBIA1_m2fdxy.jpg'} className="lovely hover"/> </a>
        <a href=""> <img src={'http://res.cloudinary.com/dkr9ndsvc/image/upload/v1476897708/LOGO_ARCILLAS_CASTILLA1_kmppki.jpg'} className="lovely hover"/> </a>
        <a href=""> <img src={''} className="lovely hover"/> </a>
    </div>
  </div>
)
}
});

module.exports = Socios;
