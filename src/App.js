import React, { Component } from 'react';
import './css/App.css';
import CocktailsContainer from './CocktailsContainer';
import MainContent from './MainContent';
import SearchBar from './SearchBar';
class App extends Component {
  constructor() {
    super();

    this.state = {
      cocktails: [],
      currentCocktail: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/cocktails')
      .then(resp => resp.json())
      .then(json => this.setState({
        cocktails: json
      }))
  }

  handleClick = (id, e) => {
    console.log( "from handleClick id", id)
    console.log( "from handleClick e", e)
  }

  showDrink = (id) => {
    fetch(`http://localhost:3000/api/v1/cocktails/${id}`)
      .then(resp => resp.json())
      .then(json => this.setState({ currentCocktail: json }))
  }


  render() {
    console.log("App:", this.state.cocktails);
    return (
      <div className="App">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <h3><span className="glyphicon glyphicon-chevron-left pull-left"></span>Cocktails</h3>
            </div>

<<<<<<< HEAD
            <form className="navbar-form navbar-right" action="/action_page.php">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search"/>
                <div className="input-group-btn">
                  <button className="btn btn-default" type="submit">
                    <i className="glyphicon glyphicon-search"></i>
                  </button>
                </div>
              </div>
            </form>

            <ul className="nav navbar-nav navbar-right pull-right">
              <li><a href="index.html"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
              <li><a href="index.html"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
=======
              <SearchBar />

            <ul className="nav navbar-nav navbar-right pull-right">
              <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
              <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
>>>>>>> 579c25259687ba8fc21327dfa4d7919b21378009
            </ul>

          </div>
        </nav>

        <CocktailsContainer cocktails={this.state.cocktails} handleClick={this.handleClick}/>
        <MainContent currentCocktail={this.state.currentCocktail}/>
      </div>
    );
  }
}

export default App;
