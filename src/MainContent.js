import React from 'react';

const MainContent = (props) => {
  console.log("MainContent:", props);

  // const cocktails = props.ma
  return (
    <div className="col-xs-8">
      <h3>Name: {props.currentCocktail.name}</h3>
      <h5>Description: <br/><br/>{props.currentCocktail.description}</h5>
    </div>
  )
}

export default MainContent;
