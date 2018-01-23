import React from 'react';
import Container from './Container';
import apiData from './services/api';

class App extends React.Component {
  state = { auth: { currentUser: {} } };

  componentDidMount() {
    if (localStorage.getItem('token')) {
      apiData.auth.getCurrentUser().then(user => {
        console.log('response is', user);
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
      <Container />
    )
  }
}

export default App;
