import React from 'react';

const SavedDrinks = props => {

  const drink = props.drinks[0][props.drinks.length - 1];

  return (
    <div>
      <h3>Saved!</h3>
      <p>{ drink }</p>
    </div>
  )
}

export default SavedDrinks;
