import React, { Component } from 'react';
import './css/App.css';
import CocktailsContainer from './CocktailsContainer';
import MainContent from './MainContent';
import SearchBar from './SearchBar';
import CocktailForm from './CocktailForm';
import SignUp from './UserSignUp';
import Login from './UserLogin';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      cocktails: [],
      ingredients: [],
      currentCocktail: '',
      searchTerm: '',
      formValue: {
        name: '',
        description: '',
        instructions: '',
        source: '',
        proportions: [{
          ingredient_name: '',
          amount: ''
        }]
      }
    }

  }

  componentDidMount() {
    this.getCocktails()
    this.getIngredients()
  }


  getCocktails = () => {
    fetch('http://localhost:3000/api/v1/cocktails')
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        cocktails: json
      })
    })
  }

  getIngredients = () => {
    fetch('http://localhost:3000/api/v1/ingredients')
    .then(resp => resp.json())
    .then(json => this.setState({
      ingredients: json
    }))
  }

  createUser = (fields) => {
    fetch('http://localhost:3000/api/v1/users',{
      method: 'POST',
      body: JSON.stringify(fields),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(resp => resp.json())
  }



  handleClick = (id) => {
    this.showDrink(id);
  }

  showDrink = (id) => {
    fetch(`http://localhost:3000/api/v1/cocktails/${id}`)
      .then(resp => resp.json())
      .then(json => this.setState({ currentCocktail: json }));
  }


  handleSearch = (e) => {
    this.setState({ searchTerm: e.target.value }, () => this.foundDrink(this.state.searchTerm));
  }

  handlSearchSubmit = (e) => {
    e.preventDefault();
  }

  foundDrink = (s) => {
    const search = s.toUpperCase();
    const drinks = this.state.cocktails.filter( cocktail => (this.findByIngredient(search, cocktail.proportions) || cocktail.name.toUpperCase().includes(search)) )
    return drinks ? drinks : [];
  }


  findByIngredient = (search, drinks) => {
    for (let drink of drinks) {
      if ( drink.ingredient_name.toUpperCase().includes(search) ) {
        return true;
      }
    }
    return false;
  }

  createNewCocktail = (fields) => {
    fetch('http://localhost:3000/api/v1/cocktails', {
      method: 'POST',
      body: JSON.stringify(fields),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(resp => resp.json())
    .then(() => {
      this.getCocktails()
      this.getIngredients()
    })
  }

  handleCocktailChange = (newValue) => {
    this.setState({formValue: newValue});
  };
//working on functions below-----------

  editCocktail = (id, fields) => {

  }


  render() {
    console.log("App State", this.state);
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <h3><span className="glyphicon glyphicon-chevron-left pull-left"></span>Cocktails</h3>
            </div>

              <SearchBar handleSearch={this.handleSearch} searchTerm={this.state.searchTerm} submit={this.handlSearchSubmit}/>

            <ul className="nav navbar-nav navbar-right pull-right">
              <li><a href="index.html"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
              <li><a href="index.html"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>

          </div>
        </nav>

        <div className="container content">
          <CocktailsContainer cocktails={this.state.searchTerm ? this.foundDrink(this.state.searchTerm) : []} handleClick={this.handleClick} />
          <MainContent currentCocktail={this.state.currentCocktail} edit={this.editCocktail}/>
          <CocktailForm onChange={this.handleCocktailChange}
                        value={this.state.formValue}
                        onSubmit={this.createNewCocktail} />
        </div>

        <div className="col-md-12">
          <SignUp/> <Login/>
        </div>

      </div>
    );
  }
}

export default App;
