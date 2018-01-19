import React from 'react';

const CocktailForm = (props) => {

  return(
    <div className="col-xs-5">
      <h3>Cocktail Form</h3>
        <form action="/action_page.php" onChange={props.handleCocktailForm} onSubmit={props.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" id="name" value={props.formValue.name}/>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea type="text" className="form-control" id="description" value={props.formValue.description}/>
          </div>

          <div className="form-group">
            <label htmlFor="instructions">Instructions:</label>
            <textarea type="text" className="form-control" id="instructions" value={props.formValue.instructions}/>
          </div>

          <div className="form-group">
            <label htmlFor="source">Source:</label>
            <input type="text" className="form-control" id="source" value={props.formValue.source}/>
          </div>
          <h4>Proportions</h4>
          <div className="row">
            <div className="col-xs-6">
              <label htmlFor="ingredient">Ingredient:</label>
              <input type="text" className="form-control" id="ingredient" value={props.formValue.proportions.ingredient}/>
            </div>
            <div className="col-xs-6">
              <label htmlFor="amount">Quantity:</label>
              <input type="text" className="form-control" id="amount" value={props.formValue.proportions.amount}/>
            </div>
          </div>

          <h1><span className="glyphicon glyphicon-plus-sign"></span></h1>
          <button type="submit" className="btn btn-default" >Create Cocktail</button>
        </form>
    </div>
  )
}

export default CocktailForm;
