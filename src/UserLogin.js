import React from 'react';

const Login = () => {

  return (
    <div className="col-md-6">
      <h3>Sign In</h3>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input className="form-control" type="text" id="email" placeholder="Email"/>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input className="form-control" type="password" id="password" placeholder="Password"/>
      </div>
      <button type="submit" className="btn btn-default" >Login</button>
    </div>
  )
}

export default Login;
