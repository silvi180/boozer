import React from 'react';
import { NavLink } from 'react-router-dom';

const UserProfile = (props) => {

  let savedCocktails
  if(props.user.saved_drinks) {
    savedCocktails = props.user.saved_drinks.map((drink, i) => {

      return (
        <div key={drink.user_drink_id}>

          <div className="input-group panel panel-default">
              <NavLink
                to="/show_cocktail"
                exact
                onClick={() => props.selectSavedDrink(drink)}>
                {drink.name}
              </NavLink>



            <div className="input-group-btn">
              <NavLink
                to="/edit_cocktail"
                exact
                onClick={() => props.editSavedDrink(drink)}
                className="btn btn-default glyphicon glyphicon-pencil"
                >
              </NavLink>

              <button onClick={() => props.removeSavedDrink(drink.user_drink_id)} className="btn btn-default glyphicon glyphicon-trash"></button>
            </div>
          </div>


        </div>
      )
    })
  }


  return(
    <div className="col-xs-4 content">
      <h3>User Profile</h3>
      <h4>{props.user.firstname} {props.user.lastname}</h4>
      <h5><b>Email:</b> {props.user.email}</h5>
      <h5><b>Age:</b> {props.user.age}</h5>
      <h5><b>Bio:</b> {props.user.bio}</h5>
      <h5><b>Saved Cocktails:</b></h5>
      <div>
        {savedCocktails}
      </div>
    </div>
  );
}

export default UserProfile;
