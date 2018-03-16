import React from 'react';

const CocktailCard = (props) => {
  let shortDesc = props.cocktail.description.slice(0, 50) + "..."
  const color = {
    color: `black`
  }
  return (
    <div style={{marginBottom: '10px', borderRadius: '1px'}} className="panel panel-default" onClick={() => {props.handleClick(props.cocktail.id)}} >
      <div style={{textAlign: 'left'}} className="panel-heading">
        <h3 className="panel-title">{props.cocktail.name}</h3>
      </div>
      <div style={{textAlign: 'left', padding: '0px 15px'}} className="panel-body">
        <h6 style={color}>{shortDesc}</h6>
      </div>
    </div>
  )
}

export default CocktailCard;




// return(
//   <div className="panel panel-default" onClick={() => {props.handleClick(props.cocktail.id)}} >
//     <div className="panel-heading">
//       <h3 className="panel-title">{props.cocktail.name}</h3>
//     </div>
//     <div className="panel-body">
//       <h6>{shortDesc}</h6>
//     </div>
//   </div>
//
// )
