import React from 'react';

const MainContent = (props) => {
  let proportions;

  if (props.currentCocktail.proportions) {
    proportions = props.currentCocktail.proportions.map((pro, i) => {
      return(
        <React.Fragment key={i}>
          <li>{pro.amount} {pro.ingredient_name}</li>
        </React.Fragment>
      )
    })
  }
  const show = {
    display: 'initial',
    color: 'black',
    overflow: 'auto',
    opacity: '1',
    backgroundColor: 'rgba(0,0,0,0.15)'
  }
  const hide = {
    display: 'none'
  }
  console.log('main content', props.show)
  console.log('main content', props.currentCocktail)


  if (window.location.pathname === '/search') {
    return (
      <div style={props.show ? show : hide } className="modal fade" id={`#drink-${props.currentCocktail.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div style={{top: '26vh'}} className="modal-dialog" role="document">
          <div style={{padding: '10px 25px'}} className="modal-content">
            <div style={{padding: '0', borderBottom: '1px solid #b0a9a9'}} className="modal-header">
            <button style={{fontSize: '30px', opacity: '1' }}type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" onClick={props.handleClose}>&times;</span>
            </button>
              <h5 className="modal-title" style={{fontSize: '30px', lineHeight: '4'}}>{props.currentCocktail.name}</h5>
            </div>
            <div style={{padding: '36px 20px 0px'}}className="modal-body">
              <h4>Description:</h4>
                <p>{props.currentCocktail.description}</p>
              <h4>Ingredients:</h4>
                <ul>{proportions}</ul>
              <h4>Instructions:</h4>
                <p>{props.currentCocktail.instructions}</p>
              <h4>Source:</h4>
                <p>{props.currentCocktail.source}</p>
            </div>
            <div style={{borderTop: '1px solid #b0a9a9'}} className="modal-footer">
              <button style={{padding: '7px 22px', border: '1px solid #b0a9a9', borderRadius: '26px', letterSpacing: '2px', backgroundColor: 'white'}} type="button" className="btn btn-secondary"  onClick={props.handleClose}>Close</button>
              <button style={{padding: '7px 26px', marginLeft: '12px', letterSpacing: '2px', borderRadius: '26px', backgroundColor: 'black'}} onClick={() => props.saveCocktail(props.currentCocktail)} className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="col-md-8">
        <h2>{props.currentCocktail.name} </h2>
        <h4>Description:</h4>
          <p>{props.currentCocktail.description}</p>
        <h4>Ingredients:</h4>
          <ul> {proportions} </ul>
        <h4>Instructions:</h4>
          <p>{props.currentCocktail.instructions}</p>
        <h4>Source:</h4>
          <p>{props.currentCocktail.source}</p>
      </div>
    )
  }
}

export default MainContent;


// return (
//   <div className="col-md-12 content">
//     <h2>{props.currentCocktail.name}
//       <span onClick={() => props.saveCocktail(props.currentCocktail)} className="glyphicon glyphicon-star-empty pull-right"></span>
//     </h2>
//     <h4>Description:</h4>
//       <p>{props.currentCocktail.description}</p>
//     <h4>Ingredients:</h4>
//       <ul>{proportions}</ul>
//     <h4>Instructions:</h4>
//       <p>{props.currentCocktail.instructions}</p>
//     <h4>Source:</h4>
//       <p>{props.currentCocktail.source}</p>
//   </div>
// )
