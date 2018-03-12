import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'



export default class SignUp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: '',
      password_confirmation: '',
      age: '',
      bio: '',
    }

  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.create(this.state)
  }

  render() {
    return (
      <form onChange={this.handleChange} onSubmit={(e) => this.handleSubmit(e)} className="col-md-6 content" >
        <h1>Boozer</h1>
        <h3>Sign Up</h3>
          <div className="col-xs-6">
            <div className="form-group">
              <label htmlFor="firstname">First Name:</label>
              <input className="form-control" type="text" value={this.state.firstname} name="firstname" placeholder="First Name"/>
            </div>
            <div className="form-group">
              <label htmlFor="firstname">Email:</label>
              <input className="form-control" type="text" value={this.state.email} name="email" placeholder="Email"/>
            </div>
            <div className="form-group">
              <label htmlFor="firstname">Password:</label>
              <input className="form-control" type="text" value={this.state.password} name="password"placeholder="Password"/>
            </div>

            <div className="form-group">
              <label htmlFor="firstname">Age:</label>
              <input className="form-control" type="text" value={this.state.age} name="age" placeholder="Age"/>
            </div>
            <NavLink
              to="/profile"
              type="submit"
              className="btn btn-default" >Sign Up</NavLink>
          </div>
          <div className="col-xs-6">
            <div className="form-group">
              <label htmlFor="firstname">Last Name:</label>
              <input className="form-control" type="text" value={this.state.lastname} name="lastname" placeholder="Last Name"/>
            </div>
            <div className="form-group">
              <label htmlFor="firstname">Username:</label>
              <input className="form-control" type="text" value={this.state.username} name="username" placeholder="Username"/>
            </div>
            <div className="form-group">
              <label htmlFor="firstname">Confirm Password:</label>
              <input className="form-control" type="text" value={this.state.password_confirmation} name="password_confirmation" placeholder="Confirm Password"/>
            </div>
            <div className="form-group">
              <label htmlFor="firstname">Bio:</label>
              <input className="form-control" type="text" value={this.state.bio} name="bio" placeholder="Bio"/>
            </div>
            <NavLink
              to="/login"
              className="pull-right"
              >Already a user? Sign In Instead</NavLink>
          </div>
      </form>
    )
  }
}
