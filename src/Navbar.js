import React from 'react';
import { NavLink } from 'react-router-dom'


const Navbar = (props) => {
  const drinkStyle = {
    color: 'inherit',
  }

  return (
    <nav className="navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand"><span className="glyphicon glyphicon glyphicon-glass pull-left" style={drinkStyle}></span><span className="margin-left"></span>Boozer</a>
        </div>

        <ul className="nav navbar-nav">
          <li><NavLink
            to="/"
            exact
            onClick={props.handleRedirect}
            >Home</NavLink></li>
          <li><NavLink
            to="/new_cocktail"
            exact
            >Create New Cocktail</NavLink></li>
        </ul>


        <ul className="nav navbar-nav navbar-right pull-right">
          <li>
            <NavLink
              to="/profile"
              exact
              ><span className="glyphicon glyphicon-user"></span> Logged in as {props.user ? props.user.firstname : "Loading..."} {props.user ? props.user.lastname : ""}</NavLink>
          </li>
          <li onClick={props.logout}><a href="/"><span className="glyphicon glyphicon-log-in"></span> LogOut</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
