import React from 'react';

const MainContent = (props) => {
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

  // const editForm = () => {
  //   console.log('would you like to edit')
  //   return (
  //     <form className="col-xs-5">
  //       <h2>Name: <input type="text" value={props.currentCocktail.name}/> </h2>
  //       <h4>Description:</h4>
  //         <textarea type="text" value={props.currentCocktail.description}/>
  //       <h4>Ingredients:</h4>
  //         <textarea type="text" value={proportions}/>
  //       <h4>Instructions:</h4>
  //         <input type="textarea" value={props.currentCocktail.instructions}/>
  //       <h4>Source:</h4>
  //         <textarea type="text" value={props.currentCocktail.source}/>
  //     </form>
  //   )
  // }

  return (
    <div className="col-xs-5">
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
