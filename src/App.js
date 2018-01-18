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
      currentCocktail: '',
      searchTerm: '',
      filteredCocktails: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/cocktails')
      .then(resp => resp.json())
      .then(json => {
        this.showDrink(json[0].id)
        this.setState({
          cocktails: json,
          filteredCocktails: json,
          currentCocktail: json[0]
        })
      })
  }

  handleClick = (id, e) => {
    this.showDrink(id);
  }

  showDrink = (id) => {
    fetch(`http://localhost:3000/api/v1/cocktails/${id}`)
      .then(resp => resp.json())
      .then(json => this.setState({ currentCocktail: json }))
  }


  handleSearch = (e) => {
    this.setState({
      searchTerm: e.target.value
    }, () => this.filterCocktails());
  }

  filterCocktails = () => {
    let beef = this.state.cocktails.filter(c => {
      let cName = c.name.toLowerCase()
      let term = this.state.searchTerm.toLowerCase()
      return(
        cName.includes(term)
      )
    })
    this.setState({
      filteredCocktails: beef
    })
  }


  render() {
    console.log("App:", this.state.currentCocktail);
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <h3><span className="glyphicon glyphicon-chevron-left pull-left"></span>Cocktails</h3>
            </div>

              <SearchBar handleSearch={this.handleSearch}/>

            <ul className="nav navbar-nav navbar-right pull-right">
              <li><a href="index.html"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
              <li><a href="index.html"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>

          </div>
        </nav>
        <div className="container content">
            <CocktailsContainer cocktails={this.state.filteredCocktails} handleClick={this.handleClick}/>
            <MainContent currentCocktail={this.state.currentCocktail}/>
        </div>
      </div>
    );
  }
}

export default App;
