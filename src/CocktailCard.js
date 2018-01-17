import React from 'react';

const CocktailCard = (props) => {
  let shortDesc = props.cocktail.description.slice(0, 50) + "..."


  return(
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{props.cocktail.name}</h3>
      </div>
      <div className="panel-body">
        <h6>{shortDesc}</h6>
      </div>
    </div>

  )
}

export default CocktailCard;


// :
// created_at
// :
// "2018-01-17T19:41:43.199Z"
// description
// :
// "Whether or not the Ward 8 was created at the Locke-Ober Café in Boston’s eighth ward to celebrate the victory of Democrat Martin Lomasney in 1896 or not, politics have always been part of cocktail culture."
// id
// :
// 292
// instructions
// :
// "Shake with ice and strain into a chilled coupe. No garnish"
// name
// :
// "WARD EIGHT"
// source
// :
// "—The Cocktail Book: A Sideboard Manual for Gentleman, 1913"
// updated_at
// :
// "2018-01-17T19:41:43.199Z"
