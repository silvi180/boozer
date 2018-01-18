import React from 'react';

const MainContent = (props) => {
  console.log("MainContent:", props);
  let proportions

  if (props.currentCocktail.proportions) {
    proportions = props.currentCocktail.proportions.map((pro, i) => {
      return(
        <div key={i}>
          <p>{pro.amount} {pro.ingredient_name}</p>
        </div>
      )
    })
  }

  console.log("proportions", proportions);
  // const cocktails = props.ma
  return (
    <div className="col-xs-8">
      <h2>Name: {props.currentCocktail.name}</h2>
      <h4>Description:</h4>
      <p>{props.currentCocktail.description}</p>
      <h4>Ingredients:</h4>
      {proportions}
      <h4>Instructions:</h4>
      <p>{props.currentCocktail.instructions}</p>
    </div>
  )
}

export default MainContent;
