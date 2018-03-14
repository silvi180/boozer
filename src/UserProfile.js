import React from 'react';
import { NavLink } from 'react-router-dom';

const UserProfile = (props) => {

  let savedCocktails
  if (props.user) {

    if(props.user.saved_drinks) {
      savedCocktails = props.user.saved_drinks.map((drink, i) => {

        return (
          <div key={drink.user_drink_id} className="row col-xs-12">

            <div className="panel-heading teal">
                <NavLink
                  to="/show_cocktail"
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

          <div className="col-xs-4 content">
            <h3>Profile</h3>
            <h4>{props.user.firstname} {props.user.lastname}</h4>
            <h5><b>Email:</b> {props.user.email}</h5>
            <h5><b>Age:</b> {props.user.age}</h5>
            <h5><b>Bio:</b> {props.user.bio}</h5>
            <h5><b>Saved Cocktails:</b></h5>
            <div>
              {savedCocktails}
            </div>
          </div>
          :
          <h1>Hello!</h1>


  );
}

export default UserProfile;
