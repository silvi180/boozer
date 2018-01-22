import React, { Component } from 'react';

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
    console.log("signup", `${e.target.name}:`, e.target.value)
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.create(this.state)
  }

  render() {
    return (
      <form onChange={this.handleChange} className="col-md-6" >
        <input type="text" value={this.state.firstname} name="firstname" placeholder="Firstname"/>
        <input type="text" value={this.state.lastname} name="lastname" placeholder="Lastname"/>
        <input type="text" value={this.state.email} name="email" placeholder="Email"/>
        <input type="text" value={this.state.username} name="username" placeholder="Username"/>
        <input type="text" value={this.state.password} name="password"placeholder="Password"/>
        <input type="text" value={this.state.password_confirmation} name="password_confirmation" placeholder="Password Confirmation"/>
        <input type="text" value={this.state.age} name="age" placeholder="Age"/>
        <input type="text" value={this.state.bio} name="bio" placeholder="Bio"/>
        <button type="submit" className="btn btn-default" onSubmit={this.handleSubmit} >Sign Up</button>
      </form>
    )
  }
}
