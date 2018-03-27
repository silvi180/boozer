import React from 'react';
import Container from './Container';
import api from './services/api';
import SignUp from './UserSignUp';
import Login from './UserLogin';


import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends React.Component {
  state = { auth: { currentUser: {} } };

  componentDidMount() {

    if (localStorage.getItem('token')) {
      api.apiData.currentUser().then(user => {
        if (!user.error) {
          this.setState({ auth: { currentUser: user } });
        }
      });
    }
  }

  handleLogin = user => {
    localStorage.setItem('token', user.token);
    this.setState({ auth: { currentUser: user } });
  };

  handleLogout = () => {
    localStorage.removeItem('token');
    this.setState({ auth: { currentUser: {} } });
  };

  render(){
    return(
      <Router basename="/">
        <div className="container-fluid">

          {!Object.keys(this.state.auth.currentUser).length ?
            <React.Fragment>
              <Route exact path="/" render={() =>  <Login handleLogin={this.handleLogin}/>} />
              <Route exact path="/login" render={() =>  <Login handleLogin={this.handleLogin}/>} />
              <Route exact path="/signup" component={SignUp} />
            </React.Fragment>
          : ''}
          {Object.keys(this.state.auth.currentUser).length ? <Container logout={this.handleLogout} login={this.state.auth.currentUser}/> : ''}

        </div>
      </Router>
    )
  }
}

export default App;
