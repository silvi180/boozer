import React from 'react';
import { NavLink } from 'react-router-dom'


const Navbar = (props) => {


  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <h3><span className="glyphicon glyphicon-chevron-left pull-left"></span>Cocktails</h3>
        </div>

        <ul className="nav navbar-nav">
          <li><NavLink
            to="/"
            exact
            >Home</NavLink></li>
          <li><NavLink
            to="/search"
            exact
            >Search</NavLink></li>
          <li><NavLink
            to="/signup"
            exact
            >Sign Up</NavLink></li>
          <li><NavLink
            to="/login"
            exact
            >Log In</NavLink></li>
          <li><NavLink
            to="/profile"
            exact
            >Profile</NavLink></li>
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
              ><span className="glyphicon glyphicon-user"></span> Logged in as {props.user.firstname} {props.user.lastname}</NavLink>
          </li>
          <li><a href="index.html"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
