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
      ingredients: [],
      foundCocktails: [],
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
          foundCocktails: json,
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
    this.setState({ searchTerm: e.target.value }, () => this.foundDrink(this.state.searchTerm));
  }

  foundDrink = (s) => {
    const search = s.toUpperCase();
    const cocktails = this.state.cocktails.filter( cocktail => cocktail.name.toUpperCase().includes(search) )
    const ingredients = this.state.ingredients.filter( ingredient => ingredient.name.toUpperCase().includes(search) )
    const found =  cocktails.concat(ingredients);
    this.setState( { foundCocktails: found });
  }


  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <h3><span className="glyphicon glyphicon-chevron-left pull-left"></span>Cocktails</h3>
            </div>

              <SearchBar handleSearch={this.handleSearch} searchTerm={this.state.searchTerm}/>

            <ul className="nav navbar-nav navbar-right pull-right">
              <li><a href="index.html"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
              <li><a href="index.html"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>

          </div>
        </nav>
        <div className="container content">
          <CocktailsContainer cocktails={this.state.foundCocktails} handleClick={this.handleClick} />
          <MainContent currentCocktail={this.state.currentCocktail}/>
        </div>
      </div>
    );
  }
}

export default App;
