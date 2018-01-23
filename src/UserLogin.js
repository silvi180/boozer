import React from 'react';
import api from './services/api';
import { NavLink } from 'react-router-dom'


export default class Login extends React.Component {

  constructor() {
    super();

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
    api.apiData.login(this.state.fields).then( data => {
      if (data.error) {
        this.setState({ error: true })
      } else {
        console.log(data)
      }
    })
  }

  render () {
    return (
      <div className="col-md-6 content">
        <form onChange={this.handleChange} onSubmit={this.login}>
          <h3>Sign In</h3>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input className="form-control" type="text" id="username" placeholder="Username" value={this.state.fields.username}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input className="form-control" type="password" id="password" placeholder="Password" value={this.state.fields.password}/>
          </div>
          <NavLink
            to="/profile"
            type="submit"
            className="btn btn-default" >Login</NavLink>
          <NavLink
            to="/signup"
            className="pull-right"
            >Don't have an account? Sign Up Instead</NavLink>
        </form>
      </div>
    )
  }
}
