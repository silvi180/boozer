import React from 'react';
import { NavLink } from 'react-router-dom';

const CocktailForm = ({ onChange, value = {proportions: []}, onSubmit }) => {

  const onFormValueChange = (key, newVal) => {
    onChange({
      ...value,
      [key]: newVal,
    });
  }

  return(
    <div className="col-xs-5 content create-form">

    <div className="row name">
      <h3>Cocktail Form</h3>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text"
                placeholder="Give your drink a name!"
               onChange={e => onFormValueChange('name', e.target.value)}
               className="new-cocktail form-control"
               value={value.name}/>
        </div>

      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea type="text"
                  placeholder="How would you describe this drink?"
                  onChange={e => onFormValueChange('description', e.target.value)}
                  className="new-cocktail form-control"
                  value={value.description}/>
      </div>
    </div>

  <div className="row instructions">
    <div className="form-group">
      <label htmlFor="instructions">Instructions:</label>
      <textarea type="text"
                placeholder="A detailed guide on how to make this drink would be awesome!"
                onChange={e => onFormValueChange('instructions', e.target.value)}
                className="new-cocktail form-control"
                value={value.instructions}/>
    </div>

    <div className="form-group">
      <label htmlFor="source">Source:</label>
      <input type="text"
            placeholder="Who is the creator of this fabulous drink?"
            onChange={e => onFormValueChange('source', e.target.value)}
            className="new-cocktail form-control"
            value={value.source}/>
    </div>
    <h4>Proportions</h4>
    {value.proportions.map((proportion, index, origArray) => {
      return (
        <div className="row ingredients" key={index}>
          <div className="col-xs-6">
            <label htmlFor="ingredient">Ingredient:</label>
            <input type="text" placeholder="Ingredient" onChange={e => onFormValueChange('proportions', [
              ...origArray.slice(0, index),
              {
                ...proportion,
                ingredient_name: e.target.value
              },
              ...origArray.slice(index + 1)
            ])} className="new-cocktail form-control" value={proportion.ingredient_name}/>
          </div>
          <div className="col-xs-6">
            <label htmlFor="amount">Quantity:</label>
            <input type="text" placeholder="How many ingredients does it take to make this concoction?" onChange={e => onFormValueChange('proportions', [
              ...origArray.slice(0, index),
              {
                ...proportion,
                amount: e.target.value
              },
              ...origArray.slice(index + 1)
            ])} className="new-cocktail form-control" value={proportion.amount}/>
          </div>
        </div>
      );
    })}

    <h1><span onClick={() => onFormValueChange('proportions', [...value.proportions, {
      ingredient_name: '',
      amount: 0
    }])} className="glyphicon glyphicon-plus-sign"></span></h1>
    <NavLink
      to="/show_cocktail"
      type="submit"
      onClick={() => onSubmit(value)}
      className="btn btn-default" >Create Cocktail</NavLink>
    </div>
  </div>
  )
}

export default CocktailForm;
