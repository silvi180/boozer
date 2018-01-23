import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/App.css';
import CocktailsContainer from './CocktailsContainer';
import MainContent from './MainContent';
import SearchBar from './SearchBar';
import CocktailForm from './CocktailForm';
import SignUp from './UserSignUp';
import Login from './UserLogin';
import UserProfile from './UserProfile'
import api from './services/api'
import Navbar from './Navbar'
import EditCocktailForm from './EditCocktailForm';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      cocktails: [],
      ingredients: [],
      currentCocktail: '',
      searchTerm: '',
      drinkToEdit: '',
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
    this.forNowGetUser()
  }

// get Data from Api
  getCocktails = () => {
    api.apiData.getCocktails()
    .then(json => {
      this.setState({
        cocktails: json
      })
    })
  }

  getIngredients = () => {
    api.apiData.getIngredients()
    .then(json => this.setState({
      ingredients: json
    }))
  }

  forNowGetUser = () => {
    fetch('http://localhost:3000/api/v1/users/1')
      .then(resp => resp.json())
      .then(resp => this.setState({ user: resp }))
  }
// this also exists in api.apiData.createUser(fields) - not currently being used
//message from silvia: createUser passes down to SignUp component
  createUser = (fields) => {
    fetch('http://localhost:3000/api/v1/users',{
      method: 'POST',
      body: JSON.stringify(fields),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(resp => resp.json())
      .then(resp => this.setState({ user: resp }))

  }


// event handlers (mostly)
  handleClick = (id) => {
    api.apiData.showDrink(id)
      .then(json => this.setState({ currentCocktail: json }));
  }

  handleSearch = (e) => {
    this.setState({ searchTerm: e.target.value }, () => this.foundDrink(this.state.searchTerm));
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

  handleNewCocktail = (fields) => {
    api.apiData.createNewCocktail(fields)
    .then(() => {
      this.getCocktails()
      this.getIngredients()
    })
  }

  handleUpdateCocktail = (fields) => {
    console.log("updateCurrentCocktail", fields);
    this.setState({
      drinkToEdit: fields,
    })
    api.apiData.updateCurrentCocktail(fields).then(resp => console.log("PATCH response", resp))
    // .then(() => {
    //   this.getCocktails()
    //   this.getIngredients()
    // })
  }

  handleCocktailChange = (newValue) => {
    this.setState({formValue: newValue});
  };

//working on functions below-----------

  handleSaveCocktail = (cocktail) => {
    console.log('saving cocktail', cocktail);

    const data = {
      name: cocktail.name,
      description: cocktail.description,
      instructions: cocktail.instructions,
      source: cocktail.source,
      cocktail_id: cocktail.id,
      user_id: this.state.user.id
    }
    this.createSavedCocktail(data)

    // not using: proportions...so no ingredients
    // we may need to rethink this

  }

  createSavedCocktail = (data) => {
    console.log('saving data', data);
    fetch('http://localhost:3000/api/v1/saved_drinks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(resp => resp.json())
      .then(() => this.forNowGetUser())
  }

  selectSavedDrink = (drink) => {
    console.log('this is the saved drink', drink);
    let cocktail = this.state.cocktails.find( c => c.id === drink.saved_drink_cocktail_id)
    console.log('selected cocktail:', cocktail);
    this.setState({
      currentCocktail: cocktail
    })
  }

  removeSavedDrink = (drinkId) => {
    console.log('this is the drink to remove', drinkId);
    fetch(`http://localhost:3000/api/v1/saved_drinks/${drinkId}`, {
      method: 'DELETE'
    }).then(resp => resp.json())
      .then(() => this.forNowGetUser())
  }


  editCocktail = (id, fields) => {

  }


  render() {
    console.log("App State", this.state);
    console.log('current cocktail in state', this.state.currentCocktail);

    const searchStyle = {
      position: "fixed",
      top: 0,

    }

    return (
      <div className="container">
        <Router>
          <div>
            <Navbar user={this.state.user} />
             <Route exact path="/" render={routerProps => {
                 return(
                   <div className="container content">
                     <div>
                       <SearchBar
                         handleSearch={this.handleSearch}
                         searchTerm={this.state.searchTerm}
                         submit={this.handlSearchSubmit}
                         style={searchStyle}
                       />
                       <CocktailsContainer cocktails={this.state.searchTerm ? this.foundDrink(this.state.searchTerm) : []} handleClick={this.handleClick} />
                       <MainContent
                         currentCocktail={this.state.currentCocktail}
                         edit={this.editCocktail}
                         saveCocktail={this.handleSaveCocktail}
                       />
                     </div>
                   </div>

                 );
               }}
              />
            <Route exact path="/signup" render={() => {
                return(
                  <SignUp create={this.createUser}/>
                );
              }} />
            <Route exact path="/login" render={() => {
                return(
                  <Login />
                );
              }} />
            <Route exact path="/profile" component={() => {
                return(
                  <UserProfile
                    user={this.state.user}
                    selectSavedDrink={this.selectSavedDrink}
                    removeSavedDrink={this.removeSavedDrink}
                    editSavedDrink={this.handleUpdateCocktail}
                    />
                )
              }} />
            <Route exact path="/profile_edit" component={() => {
                return(
                  <div>
                    <UserProfile
                      user={this.state.user}
                      selectSavedDrink={this.selectSavedDrink}
                      removeSavedDrink={this.removeSavedDrink}
                      editSavedDrink={this.handleUpdateCocktail}
                      />
                    <div className="col-xs-1"></div>
                    <EditCocktailForm onChange={this.handleCocktailChange}
                      value={this.state.drinkToEdit}
                      onSubmit={this.handleUpdateCocktail} />
                  </div>
                )
              }} />
            <Route exact path="/new_cocktail" render={() => {
                return(
                  <CocktailForm onChange={this.handleCocktailChange}
                                value={this.state.formValue}
                                onSubmit={this.handleNewCocktail} />
                );
              }}
            />
          <Route exact path="/edit_cocktail" render={() => {
                return(
                  <EditCocktailForm onChange={this.handleCocktailChange}
                                value={this.state.drinkToEdit}
                                onSubmit={this.handleUpdateCocktail} />
                );
              }}
            />

          </div>
        </Router>







      </div>
    )
  }
}

export default App;
