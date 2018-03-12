import React from 'react';

const MainContent = (props) => {
  let proportions;

  if (props.currentCocktail.proportions) {
    proportions = props.currentCocktail.proportions.map((pro, i) => {
      return(
        <div key={i}>
          <p>{pro.amount} {pro.ingredient_name}</p>
        </div>
      )
    })
  }

  return (
    <div>
      <h2>{props.currentCocktail.name}
        <span onClick={() => props.saveCocktail(props.currentCocktail)} className="glyphicon glyphicon-star-empty pull-right"></span>
      </h2>
      <h4>Description:</h4>
        <p>{props.currentCocktail.description}</p>
      <h4>Ingredients:</h4>
        {proportions}
      <h4>Instructions:</h4>
        <p>{props.currentCocktail.instructions}</p>
      <h4>Source:</h4>
        <p>{props.currentCocktail.source}</p>
    </div>
  )
}

export default MainContent;
