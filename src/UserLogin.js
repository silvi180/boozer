import React from 'react';
import api from './services/api';
import { NavLink } from 'react-router-dom'


export default class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      error: false,
      fields: {
        username: '',
        password: ''
      }
    }

  }

  handleChange = (e) => {
    this.setState({
      fields: {
        ...this.state.fields,
        [e.target.id]: e.target.value
      }
    }, () => console.log(this.state.fields))
  }

  login = (e) => {
    e.preventDefault();
    api.apiData.login(this.state.fields)
    .then(data => this.props.handleLogin(data))

  }

  render () {
    return (
      <div className="col-md-6 content">
        <form onChange={this.handleChange} onSubmit={this.login}>
          <h1>Boozer</h1>
          <h3>Sign In</h3>
          <div className="sign form-group">
            <input className="sign form-control" type="text" id="username" placeholder="username" value={this.state.fields.username}/>
          </div>
          <div className="sign form-group">
            <input className="sign form-control" type="password" id="password" placeholder="password" value={this.state.fields.password}/>
          </div>
          <button
            onSubmit={this.login}
            type="submit"
            className="sign btn btn-default" >Login</button>
        </form>
        <NavLink
          to="/signup"
          >Don't have an account? Sign Up Instead</NavLink>
      </div>
    )
  }
}
