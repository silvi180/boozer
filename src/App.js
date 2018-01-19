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
        proportions: {
          name: '',
          amount: 0
        }
      }
    }

  }
// const cocktailsURL = 'http://localhost:3000/api/v1/cocktails'
// const ingredientsURL = 'http://localhost:3000/api/v1/ingredients'

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/cocktails')
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          cocktails: json
        })
      })

    fetch('http://localhost:3000/api/v1/ingredients')
      .then(resp => resp.json())
      .then(json => this.setState({
        ingredients: json
      }))
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
//working on functions below-----------

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
  // {name: "bitters", description: "hihiih", instructions: "ughghhg", source: "flat", proportions: [{amount: 'dfddfdf', ingredient_id: 1, cocktail_id: 311}]}

  handleCocktailForm = (event) => {
    // console.log("handleCocktailForm", event.target)
    if (event.target.id === 'ingredient_name') {
      this.setState({
        ...this.state,
        formValue: {
          ...this.state.formValue,
          proportions: {
            ...this.state.formValue.proportions,
            name: event.target.value
          }
        }
      })
    } else if (event.target.id === 'amount') {
        this.setState({
          ...this.state,
          formValue: {
            ...this.state.formValue,
            proportions: {
              ...this.state.formValue.proportions,
              amount: event.target.value
            }
          }
        })
    } else {
      this.setState({
        formValue: {
          ...this.state.formValue,
          [event.target.id]: event.target.value
        }
      })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.createNewCocktail(this.state.formValue)
    console.log("handleSubmit", this.state.formValue)
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
          <CocktailsContainer cocktails={this.state.searchTerm ? this.foundDrink(this.state.searchTerm) : []} handleClick={this.handleClick} />
          <MainContent currentCocktail={this.state.currentCocktail}/>
          <CocktailForm handleCocktailForm={this.handleCocktailForm} formValue={this.state.formValue} handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
