import React from 'react';

const SavedDrinks = (props) => {
  console.log('Saved Drinks', props);
  let drinks;

  if (props.drinks) {
    drinks = props.drinks.map( (d, i) => {
      return <li key={i}>{d.name}</li>
    })
  }

  return (
    <div>
      <h3>Saved Drinks:</h3>
      <ul>{ drinks }</ul>
    </div>
  )
}

export default SavedDrinks;
