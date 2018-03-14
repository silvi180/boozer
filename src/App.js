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
    console.log('App State', this.state.auth.currentUser);
    //< Router basename "/boozer/"> why?
    return(
      <Router basename="/">
        <div className="container">

          {!Object.keys(this.state.auth.currentUser).length &&
              <div>
                <Route exact path="/" render={() => {
                    return(
                      <Login handleLogin={this.handleLogin}/>

                    )
                  }}
                />
                <Route exact path="/login" render={() => {
                    return(
                      <Login handleLogin={this.handleLogin}/>

                    )
                  }}
                />
                <Route exact path="/signup" component={SignUp} />
              </div>
          }
          {Object.keys(this.state.auth.currentUser).length &&
            <Container
              logout={this.handleLogout}
              login={this.state.auth.currentUser}/>
          }

        </div>
      </Router>
    )
  }
}

export default App;
