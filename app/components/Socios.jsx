var React = require('react');

var Socios = React.createClass({
render: function(){
return(
   <div className="portada">
       <div className="integrantes">
       <img src={'http://res.cloudinary.com/dkr9ndsvc/image/upload/c_scale,r_1,w_2143/v1476113267/LOGO_ARZUL_pn8ecv.jpg'}/>
       </div>
       <div className="logos">
          <a href="http://zuligres.com"> <img src={'http://res.cloudinary.com/dkr9ndsvc/image/upload/c_scale,h_134/v1476127910/zuligres_mbhujr.jpg'} className="lovely" /> </a>
          <a href="http://tejarsantamaria.com"> <img src={'http://res.cloudinary.com/dkr9ndsvc/image/upload/v1476129072/santamaria_gdlp5q.jpg'} className="lovely" /> </a>
      </div>
  </div>
)
}
});

module.exports = Socios;