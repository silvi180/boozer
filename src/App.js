import React, { Component } from 'react';
import './App.css';
import CocktailsContainer from './CocktailsContainer';
import MainContent from './MainContent'

class App extends Component {
  constructor() {
    super();

    this.state = {
      cocktails: [],
      currentCocktail: ""
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/cocktails')
      .then(resp => resp.json())
      .then(json => this.setState({
        cocktails: json,
        currentCocktail: json[0]
      }))
  }




  render() {
    console.log("App", this.state.cocktails);
    return (
      <div className="App">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <h3><span className="glyphicon glyphicon-chevron-left pull-left"></span>Cocktails</h3>

            </div>

            <form class="navbar-form navbar-right" action="/action_page.php">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Search"/>
                <div class="input-group-btn">
                  <button class="btn btn-default" type="submit">
                    <i class="glyphicon glyphicon-search"></i>
                  </button>
                </div>
              </div>
            </form>

            <ul class="nav navbar-nav navbar-right pull-right">
              <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
              <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>

          </div>
        </nav>

        <CocktailsContainer cocktails={this.state.cocktails}/>
        <MainContent currentCocktail={this.state.currentCocktail}/>
      </div>
    );
  }
}

export default App;
