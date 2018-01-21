import React from 'react';

const Login = () => {

  return (
    <form className="col-md-6" >
      <input type="text" placeholder="Email"/>
      <input type="text" placeholder="Password"/>
      <button type="submit" className="btn btn-default" >Login</button>
    </form>
  )
}

export default Login;
