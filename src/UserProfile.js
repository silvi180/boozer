import React from 'react';

const UserProfile = (props) => {

  let savedCocktails
  if(props.user.saved_drinks) {
    savedCocktails = props.user.saved_drinks.map((drink, i) => {
      return (
        <div key={drink.saved_drink_id}>

          <div className="input-group panel panel-default">
              <div
                onClick={() => props.selectSavedDrink(drink.saved_drink_cocktail_id)}>
                {drink.saved_drink_name}
              </div>



            <div className="input-group-btn">
              <button className="btn btn-default glyphicon glyphicon-pencil"></button>
              <button onClick={() => props.removeSavedDrink(drink.saved_drink_id)} className="btn btn-default glyphicon glyphicon-trash"></button>
            </div>
          </div>


        </div>
      )
    })
  }


  return(
    <div className="col-xs-6 panel panel-default">
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
