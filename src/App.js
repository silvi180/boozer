import React, { Component } from 'react';
import './css/App.css';
import CocktailsContainer from './CocktailsContainer';
import MainContent from './MainContent';
import SearchBar from './SearchBar';
import CocktailForm from './CocktailForm';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cocktails: [],
      ingredients: [],
      currentCocktail: '',
      searchTerm: '',
      formValue: {
        name: '',
        description: '',
        instructions: '',
        source: '',
        ingredient1: '',
        quantity1: ''
      }
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/cocktails')
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          cocktails: json
        })
      })

    // fetch('http://localhost:3000/api/v1/ingredients')
    //   .then(resp => resp.json())
    //   .then(json => this.setState({
    //     ingredients: json
    //   }))
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
    const drinks = this.state.cocktails.filter( cocktail => (this.findByIngredient(search, cocktail.proportions) || cocktail.name.includes(search)) )
    return drinks ? drinks : [];
  }

  findByIngredient = (search, drinks) => {
    for (let drink of drinks) {
      if ( drink.ingredient_name.toUpperCase().includes(search) ) {
        return true;
      }
    }
    return false
  }
//working functions below-----------

  createNewCocktail = (fields) => {

    fetch('http://localhost:3000/api/v1/cocktails', {
      method: 'POST',
      body: JSON.stringify(fields),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(resp => resp.json()).then(console.log)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.createNewCocktail(this.state.formValue)
    // console.log("handleSubmit", this.state.formValue)
  }

  handleCocktailForm = (event) => {
    event.preventDefault()
    switch(event.target.id) {
      case "name" :
        this.setState({
          formValue: {
            ...this.state.formValue,
            name: event.target.value
          }
        })
        break;
      case "description" :
        this.setState({
          formValue: {
            ...this.state.formValue,
            description: event.target.value
          }
        })
        break;
      case "instructions" :
        this.setState({
          formValue: {
            ...this.state.formValue,
            instructions: event.target.value
          }
        })
        break;
      case "source" :
        this.setState({
          formValue: {
            ...this.state.formValue,
            source: event.target.value
          }
        })
        break;
      case "ingredient" :
        this.setState({
          formValue: {
            ...this.state.formValue,
            ingredient1: event.target.value
          }
        })
        break;
      default:
        this.setState({
          formValue: {
            ...this.state.formValue,
            quantity1: event.target.value
          }
        })

    }
  }
  // findOrCreateCocktail = () => {
  //
  // }
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
          <CocktailsContainer cocktails={this.state.searchTerm ? this.foundDrink(this.state.searchTerm) : []} handleClick={this.handleClick} />
          <MainContent currentCocktail={this.state.currentCocktail}/>
          <CocktailForm handleCocktailForm={this.handleCocktailForm} formValue={this.state.formValue} handleSubmit={this.handleSubmit}/>
        </div>
      </div>
    );
  }
}

export default App;
