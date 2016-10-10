var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
          ARZUL
          </li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Socios</IndexLink>
          </li>
          <li>
            <Link to="/historia" activeClassName="active-link">Historia</Link>
          </li>
          <li>
            <Link to="/productos" activeClassName="active-link">Productos</Link>
          </li>
          <li>
            <Link to="/contacto" activeClassName="active-link">Contacto</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Nav;
