import React from 'react';

const CocktailForm = (props) => {

  return(
    <div className="col-xs-5">
      <h3>Cocktail Form</h3>
        <form action="/action_page.php">
          <div className="form-group">
            <label for="name">Name:</label>
            <input type="text" className="form-control" id="name"/>
          </div>

          <div className="form-group">
            <label for="description">Description:</label>
            <textarea type="text" className="form-control" id="description"/>
          </div>

          <div className="form-group">
            <label for="instructions">Instructions:</label>
            <textarea type="text" className="form-control" id="instructions"/>
          </div>

          <div className="form-group">
            <label for="source">Source:</label>
            <input type="text" className="form-control" id="source"/>
          </div>
          <h4>Proportions</h4>
          <div className="row">
            <div className="col-xs-6">
              <label for="ingredient">Ingredient:</label>
              <input type="text" className="form-control" id="ingredient"/>
            </div>
            <div className="col-xs-6">
              <label for="ingredient">Quantity:</label>
              <input type="text" className="form-control" id="ingredient"/>
            </div>
          </div>

          <h1><span className="glyphicon glyphicon-plus-sign"></span></h1>
          <button type="submit" className="btn btn-default">Create Cocktail</button>
        </form>
    </div>
  )
}

export default CocktailForm;
