import React from 'react';


const Navbar = (props) => {
  console.log("Navbar", props.user.firstname);

  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <h3><span className="glyphicon glyphicon-chevron-left pull-left"></span>Cocktails</h3>
        </div>



        <ul className="nav navbar-nav navbar-right pull-right">
          <li><a href="index.html"><span className="glyphicon glyphicon-user"></span> Logged in as {props.user.firstname} {props.user.lastname}</a></li>
          <li><a href="index.html"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
