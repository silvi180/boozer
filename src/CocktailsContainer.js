import React from 'react';
import CocktailCard from './CocktailCard';

const CocktailsContainer = (props) => {
  let cocktails = props.cocktails.map((c, i)=> {
    return(
      <CocktailCard cocktail={c} key={i} handleClick={props.handleClick}/>
    );
  })

  return(
    <div className="parent col-xs-3">
      { cocktails }
    </div>
  );
}

export default CocktailsContainer;
