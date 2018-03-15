import React from 'react';
import { NavLink } from 'react-router-dom';

const UserProfile = (props) => {

  let savedCocktails
  if (props.user) {

    if(props.user.saved_drinks) {
      savedCocktails = props.user.saved_drinks.map((drink, i) => {

        return (
          <div key={drink.user_drink_id} className="row col-xs-12">

            <div className="panel-heading">
                <NavLink
                  to="/profile"
                  exact
                  onClick={() => props.selectSavedDrink(drink)}>
                  {drink.name}
                </NavLink>
              <div className="pull-right">
                <NavLink
                  to="/edit_cocktail"
                  exact
                  onClick={() => props.editSavedDrink(drink)}
                  className="glyphicon glyphicon-pencil margin-left"
                  >
                </NavLink>

                <NavLink
                  to="/profile"
                  onClick={() => props.removeSavedDrink(drink.user_drink_id)}
                  className="glyphicon glyphicon-trash margin-left"></NavLink>
              </div>
            </div>


          </div>
        )
      })
    }
  }




      return(
        props.user ?
          <div className="col-md-4">
            <img src="./img/pexels-photo-616834.jpg" alt="default pic"/>
            <h3>{props.user.firstname} {props.user.lastname}</h3>
            <h5>About</h5>
            <p>{props.user.bio}</p>
            <h5>Contact</h5>
            <p>Email: {props.user.email}</p>
            <h5>Saved Drinks</h5>
            { savedCocktails }
          </div>
          :
          <h1>Hello!</h1>


  );
}

export default UserProfile;
