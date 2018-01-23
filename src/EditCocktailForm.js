import React from 'react';




// saved_drink_cocktail_id
//
// saved_drink_description
//
// saved_drink_id
//
// saved_drink_instructions
//
// saved_drink_name
//
// saved_drink_source


const EditCocktailForm = ({ onChange, value = {proportions: []}, onSubmit }) => {
  console.log("CocktailForm", value)

  const onFormValueChange = (key, newVal) => {
    console.log('onFormValueChange Key', key);
    console.log('onFormValueChange newVal', newVal);
    onChange({
      ...value,
      [key]: newVal,
    });
  }

  return(
    <div className="col-xs-5 content">
      <h3>Edit Cocktail Form</h3>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text"
               onChange={e => onFormValueChange('name', e.target.value)}
               className="form-control"
               value={value.name}/>
      </div>

      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea type="text"
                  onChange={e => onFormValueChange('description', e.target.value)}
                  className="form-control"
                  value={value.description}/>
      </div>

      <div className="form-group">
        <label htmlFor="instructions">Instructions:</label>
        <textarea type="text"
                  onChange={e => onFormValueChange('instructions', e.target.value)}
                  className="form-control"
                  value={value.instructions}/>
      </div>

      <div className="form-group">
        <label htmlFor="source">Source:</label>
        <input type="text"
               onChange={e => onFormValueChange('source', e.target.value)}
               className="form-control"
               value={value.source}/>
      </div>
      <h4>Proportions</h4>
      {value.proportions && value.proportions.map((proportion, index, origArray) => {
        return (
          <div className="row" key={index}>
            <div className="col-xs-6">
              <label htmlFor="ingredient">Ingredient:</label>
              <input type="text" onChange={e => onFormValueChange('proportions', [
                ...origArray.slice(0, index),
                {
                  ...proportion,
                  ingredient_name: e.target.value
                },
                ...origArray.slice(index + 1)
              ])} className="form-control" value={proportion.name}/>
            </div>
            <div className="col-xs-6">
              <label htmlFor="amount">Quantity:</label>
              <input type="text" onChange={e => onFormValueChange('proportions', [
                ...origArray.slice(0, index),
                {
                  ...proportion,
                  amount: e.target.value
                },
                ...origArray.slice(index + 1)
              ])} className="form-control" value={proportion.amount}/>
            </div>
          </div>
        );
      })}

      <h1><span onClick={() => onFormValueChange('proportions', [...value.proportions, {
        ingredient_name: '',
        amount: 0
      }])} className="glyphicon glyphicon-plus-sign"></span></h1>
    <button type="submit" onClick={() => onSubmit(value)} className="btn btn-default" >Update Cocktail</button>
    </div>
  )
}

export default EditCocktailForm;
